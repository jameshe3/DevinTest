# Rockset 核心概念和整体架构

## 核心概念

### 1. 集合（Collections）

集合是 Rockset 中的主要数据组织单位，类似于传统数据库中的表。集合存储文档（类似于 JSON 对象），并自动为每个字段建立索引。

### 2. 文档（Documents）

文档是 Rockset 中的基本数据单位，类似于 JSON 对象。文档可以包含嵌套字段、数组和各种数据类型。Rockset 不要求预定义模式，可以处理具有不同字段和结构的文档。

### 3. 融合索引（Converged Indexing）

Rockset 的融合索引技术为每个文档的每个字段自动创建多种索引类型：

- 倒排索引（用于点查询）
- 列式索引（用于聚合）
- 行索引（用于数据检索）
- 范围索引（用于范围扫描）

这种多索引方法使 Rockset 能够高效地处理各种查询类型。

### 4. 虚拟实例（Virtual Instances）

虚拟实例是 Rockset 中的计算单元，用于执行查询。多个虚拟实例可以访问相同的数据，并且可以根据需求独立扩展。

### 5. 查询 Lambda（Query Lambdas）

查询 Lambda 是预定义的参数化 SQL 查询，可以通过 API 调用执行。它们类似于存储过程，但针对 API 驱动的应用程序进行了优化。

## 整体架构

Rockset 的架构由以下主要组件组成：

### 1. 数据摄取层（Data Ingestion Layer）

负责从各种来源（如数据库、消息队列、数据湖等）摄取数据。支持批量摄取和实时流式摄取。

### 2. 索引构建层（Indexing Layer）

使用融合索引技术为摄取的数据自动构建多种索引类型。

### 3. 存储层（Storage Layer）

基于 RocksDB 的分布式存储系统，针对云环境进行了优化。

### 4. 查询处理层（Query Processing Layer）

处理 SQL 查询，包括查询解析、优化和执行。支持复杂的 SQL 操作，包括连接、聚合、窗口函数等。

### 5. API 层（API Layer）

提供 REST API 和各种语言的客户端库，用于与 Rockset 交互。

## 技术特点

### 1. 无模式（Schemaless）

Rockset 不要求预定义模式，可以直接摄取和查询具有不同结构的数据。

### 2. 实时索引（Real-time Indexing）

数据在摄取后立即被索引，通常在几秒钟内可用于查询。

### 3. 强类型（Strongly Typed）

尽管 Rockset 是无模式的，但它为每个值存储类型信息，确保类型安全的查询。

### 4. 分布式执行（Distributed Execution）

查询可以在多个节点上并行执行，提高性能和可扩展性。

### 5. 云原生（Cloud-native）

Rockset 设计为在云环境中运行，利用云的弹性和可扩展性。
