# Rockset 检索（Search）查询技术及索引结构

## 搜索索引概述

Rockset 的搜索功能建立在其强大的索引结构之上，特别是搜索索引（Search Index）。搜索索引是 Rockset 融合索引（Converged Indexing）技术的一部分，专门针对高效的搜索查询进行了优化。

## 搜索索引结构

### 基本结构

在搜索索引中，记录按字段和值排序，使得字段的相等值连续存储。这种结构使 Rockset 能够高效地检索字段具有特定值的文档。

### 索引组织

搜索索引的组织方式类似于倒排索引，将字段值映射到包含这些值的文档。这使得系统可以快速找到包含特定值的所有文档，而无需扫描整个集合。

### 优化技术

Rockset 使用多种技术来优化搜索索引：

1. **前缀压缩**：减少索引中重复前缀的存储开销
2. **Elias-Fano 编码**：一种高效的编码方式，用于减小发布列表的大小
3. **布隆过滤器**：快速确定某个键是否可能存在于数据集中，避免不必要的磁盘访问

## 向量搜索功能

除了传统的搜索功能外，Rockset 还支持向量搜索，使其能够处理语义搜索、相似性搜索和推荐用例。

### 向量搜索实现

Rockset 的向量搜索允许用户在其嵌入向量上执行相似性搜索，并将其与复杂的 SQL 查询、选择性谓词和其他功能无缝集成。

### 主要特性

1. **向量嵌入存储**：Rockset 可以存储和索引向量嵌入
2. **KNN 搜索**：支持 K 近邻（KNN）搜索算法
3. **相似度指标**：支持多种相似度计算方法，如余弦相似度、欧几里得距离等
4. **与 SQL 集成**：向量搜索可以与 SQL 查询无缝集成

### 向量索引创建

Rockset 允许用户为向量字段创建专门的索引，以加速向量搜索：

```sql
SELECT * FROM _input
VECTOR_ENFORCE(embedding_field)
```

这将为 `embedding_field` 创建一个向量索引，使向量搜索查询更加高效。

## 全文搜索能力

Rockset 支持全文搜索功能，允许用户在文本数据上执行复杂的搜索操作。

### 全文搜索特性

1. **文本分析**：支持文本分词、词干提取和停用词过滤
2. **模糊匹配**：支持模糊搜索和近似匹配
3. **相关性排序**：基于多种因素对搜索结果进行排序
4. **高亮显示**：能够在搜索结果中高亮显示匹配的文本

### 全文搜索优化

Rockset 的全文搜索功能通过以下方式进行了优化：

1. **倒排索引**：使用倒排索引加速文本搜索
2. **词项频率统计**：跟踪词项频率以提高相关性排序
3. **缓存机制**：缓存常用搜索结果以提高性能

## 搜索查询示例

### 基本搜索查询

```sql
SELECT * FROM collection WHERE field = 'value'
```

### 范围搜索

```sql
SELECT * FROM collection WHERE field BETWEEN 10 AND 20
```

### 全文搜索

```sql
SELECT * FROM collection WHERE SEARCH(text_field, 'search terms')
```

### 向量搜索

```sql
SELECT * FROM collection
WHERE VECTOR_DISTANCE(embedding_field, :query_embedding) < 0.5
ORDER BY VECTOR_DISTANCE(embedding_field, :query_embedding)
LIMIT 10
```

## 搜索性能优化

### 1. 使用适当的索引

根据查询模式选择适当的索引访问路径：

- 对于高选择性的点查询，使用搜索索引：`HINT(access_path=index_filter)`
- 对于范围查询，考虑使用：`HINT(access_path=index_scan, index_scan_sort_field=XYZ)`

### 2. 优化谓词

编写高效的谓词以最大限度地减少需要扫描的数据量：

- 使用等值条件而不是范围条件（如果可能）
- 将最具选择性的谓词放在前面
- 避免在大型集合上使用非选择性谓词

### 3. 利用特殊字段

特殊字段 `_event_time` 在搜索索引中有特殊优化，查询此字段比查询常规字段更高效。

### 4. 数据聚类

为频繁搜索的字段配置数据聚类，以提高查询性能：

```sql
SELECT * FROM _input
CLUSTER BY frequently_searched_field
```
