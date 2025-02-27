# LanceDB 混合查询（Hybrid Query）实现

## 主要资源
- [LanceDB 混合搜索文档](https://lancedb.github.io/lancedb/hybrid_search/hybrid_search/)
- [LanceDB 查询实现代码](https://github.com/lancedb/lancedb/blob/main/python/python/lancedb/query.py)
- [LanceDB 全文搜索实现](https://github.com/lancedb/lancedb/blob/main/python/python/lancedb/fts.py)

## 初步发现
- LanceDB 支持语义搜索和关键词搜索（全文搜索）的组合
- 使用重排序（Reranking）算法结合多种搜索结果
- 支持自定义重排序器（Custom Rerankers）
- 使用 tantivy-py 实现全文搜索功能
