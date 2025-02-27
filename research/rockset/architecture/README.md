# Rockset 技术架构和核心原理

## 主要资源
- [Rockset 官方文档](https://docs.rockset.com/documentation/)
- [Rockset GitHub](https://github.com/rockset)
- [Rockset 计算架构](https://docs.rockset.com/documentation/docs/compute-architecture)

## 初步发现
- Rockset 采用计算-计算分离架构（Compute-Compute Separation）
- 将摄取（Ingestion）计算与查询（Query）计算分离
- 使用共享热存储层（Shared Hot Storage）
- 基于 RocksDB 构建
