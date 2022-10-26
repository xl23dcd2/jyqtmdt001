/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 聚合函数 */
declare interface AggregationLegend {
  /** 指标支持的聚合函数 */
  Aggregation: string;
  /** 聚合函数作用于指标后对应的描述 */
  Legend: string;
  /** 聚合之后的指标单位 */
  Unit: string;
}

/** 告警通知渠道 */
declare interface AlertChannel {
  /** 通知模板ID */
  NoticeId?: string | null;
  /** AMP consumer ID */
  AMPConsumerId?: string | null;
}

/** 告警通知接收组 */
declare interface AlertChannelRecord {
  /** Notice ID */
  NoticeId?: string | null;
  /** Consumer ID */
  AMPConsumerId?: string | null;
  /** 项目 ID */
  ProjectId?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** App ID */
  AppId?: number | null;
  /** 主账号 */
  Uin?: string | null;
  /** 子账号 */
  SubAccountUin?: string | null;
}

/** 告警历史记录项 */
declare interface AlertRecord {
  /** 告警历史记录项 ID */
  AlertRecordId?: string | null;
  /** 项目 ID */
  ProjectId?: string | null;
  /** 场景 ID */
  ScenarioId?: string | null;
  /** 状态 */
  Status?: AlertRecordStatus | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 修改时间 */
  UpdatedAt?: string | null;
  /** 任务 ID */
  JobId?: string | null;
  /** App ID */
  AppId?: number | null;
  /** 主账号 */
  Uin?: string | null;
  /** 子账号 */
  SubAccountUin?: string | null;
  /** 场景名称 */
  ScenarioName?: string | null;
  /** 告警对象 */
  Target?: string | null;
  /** 告警规则 ID */
  JobSLAId?: string | null;
  /** 告警规则描述 */
  JobSLADescription?: string | null;
}

/** 告警历史项的状态 */
declare interface AlertRecordStatus {
  /** 停止压测任务成功与否 */
  AbortJob?: number | null;
  /** 发送告警通知成功与否 */
  SendNotice?: number | null;
}

/** 采样日志附带属性 */
declare interface Attributes {
  /** 采用请求返回码 */
  Status: string | null;
  /** 采样请求结果码 */
  Result: string | null;
  /** 采样请求API */
  Service: string | null;
  /** 采样请求调用方法 */
  Method: string | null;
  /** 采样请求延时时间 */
  Duration: string | null;
}

/** 检查点汇总结果 */
declare interface CheckSummary {
  /** 检查点名字 */
  Name: string;
  /** 检查点所在步骤名字 */
  Step: string;
  /** 检查点成功次数 */
  SuccessCount: number;
  /** 检查失败次数 */
  FailCount: number;
  /** 错误比例 */
  ErrorRate: number;
}

/** 并发模式的施压配置 */
declare interface Concurrency {
  /** 多阶段配置数组 */
  Stages?: Stage[] | null;
  /** 运行次数 */
  IterationCount?: number | null;
  /** 最大RPS */
  MaxRequestsPerSecond?: number | null;
  /** 优雅终止任务的等待时间 */
  GracefulStopSeconds?: number | null;
}

/** COS临时凭证 */
declare interface Credentials {
  /** 临时secret ID */
  TmpSecretId: string;
  /** 临时secret key */
  TmpSecretKey: string;
  /** 临时token */
  Token: string;
}

/** 定时任务 */
declare interface CronJob {
  /** 定时任务ID */
  CronJobId: string | null;
  /** 定时任务名字 */
  Name: string | null;
  /** 项目ID */
  ProjectId: string | null;
  /** 场景ID */
  ScenarioId: string | null;
  /** 场景名称 */
  ScenarioName: string | null;
  /** cron 表达式 */
  CronExpression: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 中止原因 */
  AbortReason: number | null;
  /** 定时任务状态 */
  Status: number | null;
  /** Notice ID */
  NoticeId: string | null;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 更新时间 */
  UpdatedAt: string | null;
  /** 执行频率类型 */
  FrequencyType: number | null;
  /** 备注 */
  Note: string | null;
  /** tom */
  JobOwner: string | null;
  /** App ID */
  AppId: number | null;
  /** 主账号 */
  Uin: string | null;
  /** 子账号 */
  SubAccountUin: string | null;
}

/** sample附带原始查询语句中的metric, aggregation */
declare interface CustomSample {
  /** 指标名 */
  Metric: string;
  /** 聚合条件 */
  Aggregation: string;
  /** 过滤条件 */
  Labels: Label[] | null;
  /** 查询值 */
  Value: number;
  /** Time is the number of milliseconds since the epoch// (1970-01-01 00:00 UTC) excluding leap seconds. */
  Timestamp: number;
  /** 指标对应的单位，当前单位有：s,bytes,bytes/s,reqs,reqs/s,checks,checks/s,iters,iters/s,VUs, % */
  Unit: string;
  /** 指标序列名字 */
  Name: string | null;
}

/** 指标矩阵，可包含多条指标序列 */
declare interface CustomSampleMatrix {
  /** 指标名字 */
  Metric: string;
  /** 聚合函数 */
  Aggregation: string;
  /** 指标单位 */
  Unit: string | null;
  /** 指标序列数组 */
  Streams: SampleStream[] | null;
}

/** 施压机 DNS 配置 */
declare interface DNSConfig {
  /** DNS IP 列表 */
  Nameservers?: string[] | null;
}

/** 施压机的域名解析相关配置 */
declare interface DomainNameConfig {
  /** 域名绑定配置 */
  HostAliases?: HostAlias[] | null;
  /** DNS 配置 */
  DNSConfig?: DNSConfig | null;
}

/** 文件列表 */
declare interface File {
  /** 文件 ID */
  FileId: string;
  /** 文件种类，参数文件-1，协议文件-2，请求文件-3 */
  Kind: number;
  /** 文件名 */
  Name: string;
  /** 文件字节数 */
  Size: number;
  /** 文件类型 */
  Type: string;
  /** 更新时间 */
  UpdatedAt: string;
  /** 文件行数 */
  LineCount: number | null;
  /** 头部数据行 */
  HeadLines: string[] | null;
  /** 尾部数据行 */
  TailLines: string[] | null;
  /** 首行是否为参数名 */
  HeaderInFile: boolean | null;
  /** 参数名数组 */
  HeaderColumns: string[] | null;
  /** 文件夹中的文件 */
  FileInfos: FileInfo[] | null;
  /** 关联场景 */
  ScenarioSet: Scenario[] | null;
  /** 文件状态 */
  Status: number | null;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 项目 ID */
  ProjectId: string | null;
  /** 用户账号的 App ID */
  AppID: number | null;
  /** 用户主账号 */
  Uin: string | null;
  /** 用户子账号 */
  SubAccountUin: string | null;
}

/** 文件基本信息 */
declare interface FileInfo {
  /** 文件名 */
  Name?: string | null;
  /** 文件大小 */
  Size?: number | null;
  /** 文件类型 */
  Type?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 文件 ID */
  FileId?: string | null;
}

/** 指标查询过滤 */
declare interface Filter {
  /** 等于：0，不等于：1 */
  Operator: number;
  /** 指标名 */
  LabelName: string;
  /** 指标值 */
  LabelValue: string;
}

/** 压力分布配置 */
declare interface GeoRegionsLoadItem {
  /** 地域ID */
  RegionId: number;
  /** 地域 */
  Region?: string;
  /** 百分比 */
  Percentage?: number;
}

/** 施压机域名绑定配置 */
declare interface HostAlias {
  /** 需绑定的域名列表 */
  HostNames?: string[] | null;
  /** 需绑定的 IP 地址 */
  IP?: string | null;
}

/** 查询结构封装 */
declare interface InternalMetricQuery {
  /** 指标名 */
  Metric: string;
  /** 聚合函数 */
  Aggregation: string;
  /** deprecated, 请使用Filters */
  Labels?: Label[];
  /** 指标过滤 */
  Filters?: Filter[];
  /** 指标分组 */
  GroupBy?: string[];
}

/** 任务 */
declare interface Job {
  /** 任务的JobID */
  JobId?: string | null;
  /** 任务的场景ID */
  ScenarioId?: string | null;
  /** 任务的施压配置 */
  Load?: Load | null;
  /** deprecated */
  Configs?: string[] | null;
  /** 任务的数据集文件 */
  Datasets?: TestData[] | null;
  /** deprecated */
  Extensions?: string[] | null;
  /** 任务的运行状态, JobUnknown: 0,JobCreated:1,JobPending:2, JobPreparing:3,JobSelectClustering:4,JobCreateTasking:5,JobSyncTasking:6JobRunning:11,JobFinished:12,JobPrepareException:13,JobFinishException:14,JobAborting:15,JobAborted:16,JobAbortException:17,JobDeleted:18,JobSelectClusterException:19,JobCreateTaskException:20,JobSyncTaskException:21 */
  Status?: number | null;
  /** 任务的开始时间 */
  StartTime?: string | null;
  /** 任务的结束时间 */
  EndTime?: string | null;
  /** 任务的最大VU数 */
  MaxVirtualUserCount?: number | null;
  /** 任务的备注信息 */
  Note?: string | null;
  /** 错误率百分比 */
  ErrorRate?: number | null;
  /** 任务发起人 */
  JobOwner?: string | null;
  /** deprecated */
  LoadSources?: LoadSource | null;
  /** 任务时长 */
  Duration?: number | null;
  /** 最大每秒请求数 */
  MaxRequestsPerSecond?: number | null;
  /** 总请求数 */
  RequestTotal?: number | null;
  /** 平均每秒请求数 */
  RequestsPerSecond?: number | null;
  /** 平均响应时间 */
  ResponseTimeAverage?: number | null;
  /** 响应时间第99百分位 */
  ResponseTimeP99?: number | null;
  /** 响应时间第95百分位 */
  ResponseTimeP95?: number | null;
  /** 响应时间第90百分位 */
  ResponseTimeP90?: number | null;
  /** deprecated */
  Scripts?: string[] | null;
  /** 最大响应时间 */
  ResponseTimeMax?: number | null;
  /** 最小响应时间 */
  ResponseTimeMin?: number | null;
  /** 发压host信息 */
  LoadSourceInfos?: LoadSource[] | null;
  /** 测试脚本信息 */
  TestScripts?: ScriptInfo[] | null;
  /** 协议脚本信息 */
  Protocols?: ProtocolInfo[] | null;
  /** 请求文件信息 */
  RequestFiles?: FileInfo[] | null;
  /** 拓展包文件信息 */
  Plugins?: FileInfo[] | null;
  /** 定时任务ID */
  CronId?: string | null;
  /** 场景类型 */
  Type?: string | null;
  /** 域名绑定配置 */
  DomainNameConfig?: DomainNameConfig | null;
  /** false */
  Debug?: boolean | null;
  /** 中断原因 */
  AbortReason?: number | null;
  /** 任务的创建时间 */
  CreatedAt?: string | null;
  /** 项目ID */
  ProjectId?: string | null;
  /** 通知事件回调 */
  NotificationHooks?: NotificationHook[] | null;
}

/** 包含labelName 和labelValue */
declare interface Label {
  /** label名字 */
  LabelName: string;
  /** label值 */
  LabelValue: string;
}

/** 标签及对应的值 */
declare interface LabelWithValues {
  /** 标签名称 */
  LabelName: string;
  /** 标签值 */
  LabelValues: string[];
}

/** 施压配置 */
declare interface Load {
  /** 施压配置 */
  LoadSpec?: LoadSpec | null;
  /** 压力来源 */
  VpcLoadDistribution?: VpcLoadDistribution | null;
  /** 压力分布 */
  GeoRegionsLoadDistribution?: GeoRegionsLoadItem[] | null;
}

/** 发压host来源 */
declare interface LoadSource {
  /** 发压host的IP */
  IP?: string | null;
  /** 发压host所在的pod */
  PodName?: string | null;
  /** 所属地域 */
  Region?: string | null;
}

/** 施压配置 */
declare interface LoadSpec {
  /** 并发施压模式的配置 */
  Concurrency?: Concurrency | null;
  /** RPS施压模式的配置 */
  RequestsPerSecond?: RequestsPerSecond | null;
  /** 脚本内置压力模式 */
  ScriptOrigin?: ScriptOrigin | null;
}

/** 指标结构 */
declare interface MetricInfo {
  /** 后台指标 */
  Metric: string;
  /** 前台展示指标名称 */
  Alias: string;
  /** 指标描述 */
  Description: string | null;
  /** 指标类型 */
  MetricType: string;
  /** 默认指标单位 */
  Unit: string;
  /** 指标支持的聚合函数 */
  Aggregations: AggregationLegend[];
  /** 是否内部指标，内部指标不可在前台提供用户自由选择 */
  InnerMetric: boolean;
}

/** PTS提供的指标名，指标对应的labels及values */
declare interface MetricLabelWithValues {
  /** metric 名字 */
  MetricName: string;
  /** label及values 数组 */
  LabelValuesSet: LabelWithValues[];
}

/** 通用日志 */
declare interface NormalLog {
  /** 毫秒时间戳 */
  Timestamp: string | null;
  /** 日志级别 */
  SeverityText: string | null;
  /** 日志输出内容 */
  Body: string | null;
}

/** 测试启动前后的消息通知 */
declare interface Notification {
  /** 发生事件 */
  Events?: string[];
  /** webhook的网址 */
  URL?: string;
}

/** 事件通知回调 */
declare interface NotificationHook {
  /** 通知事件 */
  Events?: string[] | null;
  /** 回调 URL */
  URL?: string | null;
}

/** 项目 */
declare interface Project {
  /** 项目ID */
  ProjectId?: string;
  /** 项目名 */
  Name?: string;
  /** 项目描述 */
  Description?: string | null;
  /** 标签数组 */
  Tags?: TagSpec[] | null;
  /** 项目状态 */
  Status?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 修改时间 */
  UpdatedAt?: string;
  /** App ID */
  AppId: number;
  /** 用户ID */
  Uin: string;
  /** 子用户ID */
  SubAccountUin: string;
}

/** 协议文件详情 */
declare interface ProtocolInfo {
  /** 协议详情 */
  Name?: string | null;
  /** 文件大小 */
  Size?: number | null;
  /** 文件类型 */
  Type?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 文件 ID */
  FileId?: string | null;
}

/** 采用日志响应时间RT范围 */
declare interface ReactionTimeRange {
  /** 最小响应时间，单位ms */
  Min?: string;
  /** 最大响应时间，单位ms */
  Max?: string;
}

/** 地域 */
declare interface RegionDetail {
  /** 地域代码 */
  Region: string;
  /** 地域ID */
  RegionId: number;
  /** 地域所在的地区 */
  Area?: string;
  /** 地域名称 */
  RegionName?: string;
  /** 地域状态 */
  RegionState?: number;
  /** 地域简称 */
  RegionShortName?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
}

/** 压测请求明细 */
declare interface RequestSummary {
  /** 请求URL */
  Service: string;
  /** 请求方法 */
  Method: string;
  /** 请求次数 */
  Count: number;
  /** 请求响应平均耗时，单位秒 */
  Average: number;
  /** 请求p90耗时，单位秒 */
  P90: number;
  /** 请求p95耗时，单位秒 */
  P95: number;
  /** 请求最小耗时，单位秒 */
  Min: number;
  /** 请求最大耗时，单位秒 */
  Max: number;
  /** 请求错误率 */
  ErrorPercentage: number;
  /** 请求p99耗时，单位秒 */
  P99: number;
  /** 响应状态码 */
  Status: string;
  /** 响应详情 */
  Result: string;
}

/** RPS模式的施压配置 */
declare interface RequestsPerSecond {
  /** 最大RPS */
  MaxRequestsPerSecond?: number | null;
  /** 施压时间 */
  DurationSeconds?: number | null;
  /** deprecated */
  TargetVirtualUsers?: number | null;
  /** 资源数 */
  Resources?: number | null;
  /** 起始RPS */
  StartRequestsPerSecond?: number | null;
  /** 目标RPS，入参无效 */
  TargetRequestsPerSecond?: number | null;
  /** 优雅关停的等待时间 */
  GracefulStopSeconds?: number | null;
}

/** SLA 标签 */
declare interface SLALabel {
  /** 标签名 */
  LabelName?: string | null;
  /** 标签值 */
  LabelValue?: string | null;
}

/** SLA 策略 */
declare interface SLAPolicy {
  /** SLA 规则 */
  SLARules?: SLARule[] | null;
  /** 告警通知渠道 */
  AlertChannel?: AlertChannel | null;
}

/** SLA 规则 */
declare interface SLARule {
  /** 压测指标 */
  Metric?: string | null;
  /** 压测指标聚合方法 */
  Aggregation?: string | null;
  /** 压测指标条件判断符号 */
  Condition?: string | null;
  /** 阈值 */
  Value?: number | null;
  /** 标签 */
  LabelFilter?: SLALabel[] | null;
  /** 是否停止压测任务 */
  AbortFlag?: boolean | null;
  /** 持续时长 */
  For?: string | null;
}

/** 采样日志 */
declare interface SampleLog {
  /** 日志毫秒时间戳 */
  Timestamp: string | null;
  /** 采样日志属性 */
  Attributes: Attributes | null;
  /** har格式的采样请求 */
  Body: string | null;
}

/** sample采样值 */
declare interface SamplePair {
  /** is the number of milliseconds since the epoch (1970-01-01 00:00 UTC) excluding leap seconds. */
  Timestamp: number;
  /** is a representation of a value for a given sample at a given time. */
  Value: number;
}

/** 连续指标采样内容 */
declare interface SampleStream {
  /** labels描述 */
  Labels: Label[] | null;
  /** 指标采样数组 */
  Values: SamplePair[];
  /** 指标序列名字 */
  Name: string | null;
}

/** 场景列表 */
declare interface Scenario {
  /** 场景ID */
  ScenarioId?: string;
  /** 场景名 */
  Name: string;
  /** 场景描述 */
  Description?: string | null;
  /** 场景类型，如pts-http, pts-js, pts-trpc, pts-jmeter */
  Type?: string | null;
  /** 场景状态 */
  Status?: number | null;
  /** 施压配置 */
  Load?: Load | null;
  /** deprecated */
  EncodedScripts?: string | null;
  /** deprecated */
  Configs?: string[] | null;
  /** deprecated */
  Extensions?: string[] | null;
  /** 测试数据集 */
  Datasets?: TestData[] | null;
  /** SLA规则的ID */
  SLAId?: string | null;
  /** Cron Job规则的ID */
  CronId?: string | null;
  /** 场景创建时间 */
  CreatedAt?: string;
  /** 场景修改时间 */
  UpdatedAt?: string;
  /** 项目ID */
  ProjectId?: string | null;
  /** App ID */
  AppId: number | null;
  /** 用户ID */
  Uin: string | null;
  /** 子用户ID */
  SubAccountUin: string | null;
  /** 测试脚本信息 */
  TestScripts: ScriptInfo[] | null;
  /** 协议文件信息 */
  Protocols: ProtocolInfo[] | null;
  /** 请求文件信息 */
  RequestFiles: FileInfo[] | null;
  /** SLA 策略 */
  SLAPolicy: SLAPolicy | null;
  /** 扩展包信息 */
  Plugins: FileInfo[] | null;
  /** 域名解析配置 */
  DomainNameConfig: DomainNameConfig | null;
  /** 通知事件回调 */
  NotificationHooks: NotificationHook[] | null;
}

/** 查询与特定scenario关联的job的参数 */
declare interface ScenarioRelatedJobsParams {
  /** job偏移量 */
  Offset?: number;
  /** 限制最多查询的job数 */
  Limit?: number;
  /** 排序字段 */
  OrderBy?: string;
  /** 是否升序 */
  Ascend?: boolean;
}

/** 带已执行任务的scenario */
declare interface ScenarioWithJobs {
  /** scecario结果 */
  Scenario: Scenario | null;
  /** job结果 */
  Jobs: Job[] | null;
}

/** 脚本信息 */
declare interface ScriptInfo {
  /** 文件名 */
  Name?: string | null;
  /** 文件大小 */
  Size?: number | null;
  /** 文件类型 */
  Type?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** base64编码后的文件内容 */
  EncodedContent?: string | null;
  /** base64编码后的har结构体 */
  EncodedHttpArchive?: string | null;
  /** 脚本权重，范围 1-100 */
  LoadWeight?: number | null;
}

/** 脚本内置压力模型 */
declare interface ScriptOrigin {
  /** 机器数量 */
  MachineNumber: number;
  /** 机器规格 */
  MachineSpecification: string;
  /** 压测时长 */
  DurationSeconds: number;
}

/** 分阶段施压时，对单个阶段的配置 */
declare interface Stage {
  /** 施压时间 */
  DurationSeconds?: number | null;
  /** 虚拟用户数 */
  TargetVirtualUsers?: number | null;
}

/** 标签 */
declare interface TagSpec {
  /** 标签键 */
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
}

/** 测试数据集 */
declare interface TestData {
  /** 测试数据集所在的文件名 */
  Name: string | null;
  /** 测试数据集是否分片 */
  Split: boolean | null;
  /** 首行是否为参数名 */
  HeaderInFile: boolean | null;
  /** 参数名数组 */
  HeaderColumns?: string[] | null;
  /** 文件行数 */
  LineCount?: number | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 文件字节数 */
  Size?: number | null;
  /** 头部数据行 */
  HeadLines?: string[] | null;
  /** 尾部数据行 */
  TailLines?: string[] | null;
  /** 文件类型 */
  Type?: string | null;
  /** 文件 ID */
  FileId?: string | null;
}

/** 压力来源配置 */
declare interface VpcLoadDistribution {
  /** 地域ID */
  RegionId: number;
  /** 地域 */
  Region?: string;
  /** VPC ID */
  VpcId?: string | null;
  /** 子网ID列表 */
  SubnetIds?: string[] | null;
}

declare interface AbortCronJobsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 定时任务ID数组 */
  CronJobIds: string[];
}

declare interface AbortCronJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AbortJobRequest {
  /** 任务ID */
  JobId: string;
  /** 项目ID */
  ProjectId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 中断原因 */
  AbortReason?: number;
}

declare interface AbortJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AdjustJobSpeedRequest {
  /** 任务ID */
  JobId: string;
  /** 目标RPS */
  TargetRequestsPerSecond: number;
}

declare interface AdjustJobSpeedResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CopyScenarioRequest {
  /** 项目 ID */
  ProjectId: string;
  /** 场景 ID */
  ScenarioId: string;
}

declare interface CopyScenarioResponse {
  /** 复制出的新场景 ID */
  ScenarioId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAlertChannelRequest {
  /** Notice ID */
  NoticeId: string;
  /** 项目 ID */
  ProjectId: string;
  /** AMP Consumer ID */
  AMPConsumerId?: string;
}

declare interface CreateAlertChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCronJobRequest {
  /** 定时任务名字 */
  Name: string;
  /** 项目ID */
  ProjectId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 场景名称 */
  ScenarioName: string;
  /** 执行频率类型，1:只执行一次; 2:日粒度; 3:周粒度; 4:高级 */
  FrequencyType: number;
  /** cron表达式 */
  CronExpression: string;
  /** 任务发起人 */
  JobOwner: string;
  /** 结束时间 */
  EndTime?: string;
  /** Notice ID */
  NoticeId?: string;
  /** 备注 */
  Note?: string;
}

declare interface CreateCronJobResponse {
  /** 定时任务ID */
  CronJobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFileRequest {
  /** 文件 ID */
  FileId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 文件种类，参数文件-1，协议文件-2，请求文件-3 */
  Kind: number;
  /** 文件名 */
  Name: string;
  /** 文件大小 */
  Size: number;
  /** 文件类型，文件夹-folder */
  Type: string;
  /** 行数 */
  LineCount?: number;
  /** 前几行数据 */
  HeadLines?: string[];
  /** 后几行数据 */
  TailLines?: string[];
  /** 表头是否在文件内 */
  HeaderInFile?: boolean;
  /** 表头 */
  HeaderColumns?: string[];
  /** 文件夹中的文件 */
  FileInfos?: FileInfo[];
}

declare interface CreateFileResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 项目名 */
  Name: string;
  /** 项目描述 */
  Description?: string;
  /** 标签数组 */
  Tags?: TagSpec[];
}

declare interface CreateProjectResponse {
  /** 项目ID */
  ProjectId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateScenarioRequest {
  /** 场景名 */
  Name: string;
  /** 压测引擎类型 */
  Type: string;
  /** 项目ID */
  ProjectId: string;
  /** 场景描述 */
  Description?: string;
  /** 施压配置 */
  Load?: Load;
  /** deprecated */
  Configs?: string[];
  /** 测试数据集 */
  Datasets?: TestData[];
  /** deprecated */
  Extensions?: string[];
  /** deprecated */
  SLAId?: string;
  /** cron job ID */
  CronId?: string;
  /** deprecated */
  Scripts?: string[];
  /** 测试脚本文件信息 */
  TestScripts?: ScriptInfo[];
  /** 协议文件路径 */
  Protocols?: ProtocolInfo[];
  /** 请求文件路径 */
  RequestFiles?: FileInfo[];
  /** SLA 策略 */
  SLAPolicy?: SLAPolicy;
  /** 拓展包文件路径 */
  Plugins?: FileInfo[];
  /** 域名解析配置 */
  DomainNameConfig?: DomainNameConfig;
}

declare interface CreateScenarioResponse {
  /** 场景ID */
  ScenarioId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAlertChannelRequest {
  /** 项目 ID */
  ProjectId: string;
  /** Notice ID */
  NoticeId: string;
}

declare interface DeleteAlertChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCronJobsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 定时任务ID数组 */
  CronJobIds: string[];
}

declare interface DeleteCronJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFilesRequest {
  /** 项目 ID */
  ProjectId: string;
  /** 文件 ID 数组 */
  FileIds: string[];
}

declare interface DeleteFilesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteJobsRequest {
  /** 任务ID数组 */
  JobIds: string[];
  /** 项目ID */
  ProjectId: string;
  /** 场景ID数组 */
  ScenarioIds: string[];
}

declare interface DeleteJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProjectsRequest {
  /** 项目ID数组 */
  ProjectIds: string[];
  /** 是否删除项目相关的场景。默认为否。 */
  DeleteScenarios?: boolean;
  /** 是否删除项目相关的任务。默认为否。 */
  DeleteJobs?: boolean;
}

declare interface DeleteProjectsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteScenariosRequest {
  /** 场景ID数组 */
  ScenarioIds: string[];
  /** 项目ID */
  ProjectId: string;
  /** 是否删除场景相关的任务。默认为否。 */
  DeleteJobs?: boolean;
}

declare interface DeleteScenariosResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAlertChannelsRequest {
  /** 项目 ID 列表 */
  ProjectIds: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大为100 */
  Limit?: number;
  /** Notice ID 列表 */
  NoticeIds?: string[];
  /** 排序项 */
  OrderBy?: string;
  /** 是否正序 */
  Ascend?: boolean;
}

declare interface DescribeAlertChannelsResponse {
  /** 告警通知接收组列表 */
  AlertChannelSet: AlertChannelRecord[] | null;
  /** 告警通知接收组数目 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAlertRecordsRequest {
  /** 项目 ID 列表 */
  ProjectIds: string[];
  /** 场景 ID 列表 */
  ScenarioIds?: string[];
  /** 任务 ID 列表 */
  JobIds?: string[];
  /** 是否正序 */
  Ascend?: boolean;
  /** 排序项 */
  OrderBy?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大为100 */
  Limit?: number;
  /** 按场景名筛选 */
  ScenarioNames?: string[];
}

declare interface DescribeAlertRecordsResponse {
  /** 告警历史 */
  AlertRecordSet: AlertRecord[] | null;
  /** 告警历史记录的总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAvailableMetricsRequest {
}

declare interface DescribeAvailableMetricsResponse {
  /** 系统支持的所有指标 */
  MetricSet: MetricInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCheckSummaryRequest {
  /** 任务ID */
  JobId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeCheckSummaryResponse {
  /** 检查点汇总信息 */
  CheckSummarySet: CheckSummary[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCronJobsRequest {
  /** 项目ID数组 */
  ProjectIds: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 定时任务ID数组 */
  CronJobIds?: string[];
  /** 定时任务名字，模糊查询 */
  CronJobName?: string;
  /** 定时任务状态数组 */
  CronJobStatus?: number[];
  /** 排序的列 */
  OrderBy?: string;
  /** 是否正序 */
  Ascend?: boolean;
}

declare interface DescribeCronJobsResponse {
  /** 定时任务总数 */
  Total: number;
  /** 定时任务信息 */
  CronJobSet: CronJob[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFilesRequest {
  /** 项目 ID 数组 */
  ProjectIds: string[];
  /** 文件 ID 数组 */
  FileIds?: string[];
  /** 文件名 */
  FileName?: string;
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 返回数量，默认为 20，最大为 100 */
  Limit?: number;
  /** 文件种类，参数文件-1，协议文件-2，请求文件-3 */
  Kind?: number;
}

declare interface DescribeFilesResponse {
  /** 文件列表 */
  FileSet: File[] | null;
  /** 文件总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeJobsRequest {
  /** 场景ID数组 */
  ScenarioIds: string[];
  /** 项目ID数组 */
  ProjectIds: string[];
  /** 分页起始位置 */
  Offset?: number;
  /** 每页最大数目 */
  Limit?: number;
  /** 任务ID数组 */
  JobIds?: string[];
  /** 按字段排序 */
  OrderBy?: string;
  /** 升序/降序 */
  Ascend?: boolean;
  /** 任务开始时间 */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 调试任务标记 */
  Debug?: boolean;
  /** 任务的状态 */
  Status?: number[];
}

declare interface DescribeJobsResponse {
  /** 任务列表 */
  JobSet: Job[] | null;
  /** 任务数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLabelValuesRequest {
  /** 任务ID */
  JobId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 指标名称 */
  Metric: string;
  /** 查询标签名称 */
  LabelName: string;
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeLabelValuesResponse {
  /** 标签值数组 */
  LabelValueSet: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMetricLabelWithValuesRequest {
  /** job id */
  JobId: string;
  /** project id */
  ProjectId: string;
  /** scenario id */
  ScenarioId: string;
}

declare interface DescribeMetricLabelWithValuesResponse {
  /** 指标所有的label和values数组 */
  MetricLabelWithValuesSet: MetricLabelWithValues[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNormalLogsRequest {
  /** 压测项目ID */
  ProjectId: string;
  /** 测试场景ID */
  ScenarioId: string;
  /** 压测任务ID */
  JobId: string;
  /** 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时 */
  Context?: string;
  /** 日志开始时间 */
  From?: string;
  /** 日志结束时间 */
  To?: string;
  /** 日志级别，可取debug/info/error */
  SeverityText?: string;
  /** 施压节点IP */
  Instance?: string;
  /** 施压节点所在地域 */
  InstanceRegion?: string;
  /** 日志类型， console代表用户输出，engine代表引擎输出 */
  LogType?: string;
  /** 返回日志条数限制，最大100 */
  Limit?: number;
}

declare interface DescribeNormalLogsResponse {
  /** 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时 */
  Context: string | null;
  /** 日志数组 */
  NormalLogs: NormalLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectsRequest {
  /** 分页offset */
  Offset?: number;
  /** 每页limit */
  Limit?: number;
  /** 项目ID数组 */
  ProjectIds?: string[];
  /** 项目名 */
  ProjectName?: string;
  /** 按字段排序 */
  OrderBy?: string;
  /** 升序/降序 */
  Ascend?: boolean;
  /** 标签数组 */
  TagFilters?: TagSpec[];
}

declare interface DescribeProjectsResponse {
  /** 项目数组 */
  ProjectSet: Project[] | null;
  /** 项目数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域数组 */
  RegionSet: RegionDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRequestSummaryRequest {
  /** 压测任务ID */
  JobId: string;
  /** 压测场景ID */
  ScenarioId: string;
  /** 压测项目ID */
  ProjectId: string;
}

declare interface DescribeRequestSummaryResponse {
  /** 请求汇总信息 */
  RequestSummarySet: RequestSummary[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSampleBatchQueryRequest {
  /** job id */
  JobId: string;
  /** 场景id */
  ScenarioId: string;
  /** 查询指标数组 */
  Queries: InternalMetricQuery[];
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeSampleBatchQueryResponse {
  /** 返回指标内容 */
  MetricSampleSet: CustomSample[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSampleLogsRequest {
  /** 测试项目ID */
  ProjectId: string;
  /** 测试场景ID */
  ScenarioId: string;
  /** 测试任务ID */
  JobId: string;
  /** 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时 */
  Context?: string;
  /** 日志开始时间 */
  From?: string;
  /** 日志结束时间 */
  To?: string;
  /** 日志级别debug,info,error */
  SeverityText?: string;
  /** ap-shanghai, ap-guangzhou */
  InstanceRegion?: string;
  /** 施压引擎节点IP */
  Instance?: string;
  /** request 代表采样日志,可为不填 */
  LogType?: string;
  /** 返回日志条数，最大100 */
  Limit?: number;
  /** 采样日志响应时间范围 */
  ReactionTimeRange?: ReactionTimeRange;
  /** 采样请求状态码 */
  Status?: string;
  /** 采样请求结果码 */
  Result?: string;
  /** 采样请求方法 */
  Method?: string;
  /** 采样服务API */
  Service?: string;
}

declare interface DescribeSampleLogsResponse {
  /** 日志总数 */
  Total: number;
  /** 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时 */
  Context: string | null;
  /** 采样日志数组 */
  SampleLogs: SampleLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSampleMatrixBatchQueryRequest {
  /** 任务ID */
  JobId: string;
  /** 项目ID */
  ProjectId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 查询语句 */
  Queries: InternalMetricQuery[];
}

declare interface DescribeSampleMatrixBatchQueryResponse {
  /** 批量指标矩阵 */
  MetricSampleMatrixSet: CustomSampleMatrix[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSampleMatrixQueryRequest {
  /** 任务ID */
  JobId: string;
  /** 项目ID */
  ProjectId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 指标名字 */
  Metric: string;
  /** 聚合函数 */
  Aggregation: string;
  /** 指标过滤 */
  Filters?: Filter[];
  /** 分组 */
  GroupBy?: string[];
}

declare interface DescribeSampleMatrixQueryResponse {
  /** 指标矩阵 */
  MetricSampleMatrix: CustomSampleMatrix | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSampleQueryRequest {
  /** job id */
  JobId: string;
  /** 场景Id */
  ScenarioId: string;
  /** 指标名 */
  Metric: string;
  /** 聚合条件 */
  Aggregation: string;
  /** 项目ID */
  ProjectId: string;
  /** 过滤条件 */
  Labels?: Label[];
}

declare interface DescribeSampleQueryResponse {
  /** 返回指标内容 */
  MetricSample: CustomSample | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScenarioWithJobsRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大为100 */
  Limit?: number;
  /** 项目ID数组 */
  ProjectIds?: string[];
  /** 场景ID数组 */
  ScenarioIds?: string[];
  /** 场景名 */
  ScenarioName?: string;
  /** 场景状态数组 */
  ScenarioStatus?: number;
  /** 排序的列 */
  OrderBy?: string;
  /** 是否正序 */
  Ascend?: boolean;
  /** job相关参数 */
  ScenarioRelatedJobsParams?: ScenarioRelatedJobsParams;
  /** 是否需要返回场景的脚本内容 */
  IgnoreScript?: boolean;
  /** 是否需要返回测试数据文件信息 */
  IgnoreDataset?: boolean;
}

declare interface DescribeScenarioWithJobsResponse {
  /** 场景配置以及附带的job内容 */
  ScenarioWithJobsSet: ScenarioWithJobs[] | null;
  /** 场景总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScenariosRequest {
  /** 场景ID数组 */
  ScenarioIds?: string[];
  /** 场景名 */
  ScenarioName?: string;
  /** 场景状态数组 */
  ScenarioStatus?: number[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大为100 */
  Limit?: number;
  /** 排序的列 */
  OrderBy?: string;
  /** 是否正序 */
  Ascend?: boolean;
  /** 项目ID数组 */
  ProjectIds?: string[];
  /** 场景类型 */
  ScenarioType?: string;
}

declare interface DescribeScenariosResponse {
  /** 场景列表 */
  ScenarioSet: Scenario[] | null;
  /** 场景总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GenerateTmpKeyRequest {
  /** 项目ID */
  ProjectId: string;
  /** 场景ID */
  ScenarioId?: string;
}

declare interface GenerateTmpKeyResponse {
  /** 临时访问凭证获取时刻的时间戳（单位秒） */
  StartTime: number;
  /** 临时访问凭证超时 时刻的时间戳（单位秒） */
  ExpiredTime: number;
  /** 临时访问凭证 */
  Credentials: Credentials;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RestartCronJobsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 定时任务ID数组 */
  CronJobIds: string[];
}

declare interface RestartCronJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartJobRequest {
  /** 场景ID */
  ScenarioId: string;
  /** 任务发起人 */
  JobOwner: string;
  /** 项目ID */
  ProjectId: string;
  /** 是否调试 */
  Debug?: boolean;
  /** 备注 */
  Note?: string;
}

declare interface StartJobResponse {
  /** 任务ID */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCronJobRequest {
  /** 项目ID */
  ProjectId: string;
  /** 定时任务ID */
  CronJobId: string;
  /** 备注 */
  Note: string;
  /** cron表达式 */
  CronExpression: string;
  /** 执行频率类型，1:只执行一次; 2:日粒度; 3:周粒度; 4:高级 */
  FrequencyType: number;
  /** 定时任务名字 */
  Name: string;
  /** 场景ID */
  ScenarioId: string;
  /** 场景名称 */
  ScenarioName: string;
  /** 任务发起人 */
  JobOwner: string;
  /** 结束时间 */
  EndTime?: string;
  /** Notice ID */
  NoticeId?: string;
}

declare interface UpdateCronJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateFileScenarioRelationRequest {
  /** 文件 ID */
  FileId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 场景 ID 数组 */
  ScenarioIds?: string[];
}

declare interface UpdateFileScenarioRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateJobRequest {
  /** 任务ID */
  JobId: string;
  /** 项目ID */
  ProjectId: string;
  /** 场景ID */
  ScenarioId: string;
  /** 任务备注信息 */
  Note?: string;
}

declare interface UpdateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateProjectRequest {
  /** 项目ID */
  ProjectId: string;
  /** 项目名 */
  Name?: string;
  /** 项目描述 */
  Description?: string;
  /** 项目状态，默认传递1 */
  Status?: number;
  /** 标签数组 */
  Tags?: TagSpec[];
}

declare interface UpdateProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateScenarioRequest {
  /** 场景ID */
  ScenarioId: string;
  /** 场景名 */
  Name?: string;
  /** 场景描述 */
  Description?: string;
  /** 压测引擎类型 */
  Type?: string;
  /** 施压配置 */
  Load?: Load;
  /** deprecated */
  EncodedScripts?: string;
  /** deprecated */
  Configs?: string[];
  /** 测试数据集 */
  Datasets?: TestData[];
  /** deprecated */
  Extensions?: string[];
  /** SLA规则ID */
  SLAId?: string;
  /** cron job ID */
  CronId?: string;
  /** 场景状态（注：现已无需传递该参数） */
  Status?: number;
  /** 项目ID */
  ProjectId?: string;
  /** 测试脚本路径 */
  TestScripts?: ScriptInfo[];
  /** 协议文件路径 */
  Protocols?: ProtocolInfo[];
  /** 请求文件路径 */
  RequestFiles?: FileInfo[];
  /** SLA 策略 */
  SLAPolicy?: SLAPolicy;
  /** 拓展包文件路径 */
  Plugins?: FileInfo[];
  /** 域名解析配置 */
  DomainNameConfig?: DomainNameConfig;
  /** WebHook请求配置 */
  NotificationHooks?: Notification[];
}

declare interface UpdateScenarioResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [云压测](https://cloud.tencent.com/document/product/1484) */
declare interface Pts {
  (): Versions;
  /** 停止定时任务 */
  AbortCronJobs(data: AbortCronJobsRequest, config?: AxiosRequestConfig): AxiosPromise<AbortCronJobsResponse>;
  /** 停止任务 */
  AbortJob(data: AbortJobRequest, config?: AxiosRequestConfig): AxiosPromise<AbortJobResponse>;
  /** 调整任务目标RPS */
  AdjustJobSpeed(data: AdjustJobSpeedRequest, config?: AxiosRequestConfig): AxiosPromise<AdjustJobSpeedResponse>;
  /** 复制场景 */
  CopyScenario(data: CopyScenarioRequest, config?: AxiosRequestConfig): AxiosPromise<CopyScenarioResponse>;
  /** 创建告警通知接收组 */
  CreateAlertChannel(data: CreateAlertChannelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlertChannelResponse>;
  /** 创建定时任务 */
  CreateCronJob(data: CreateCronJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCronJobResponse>;
  /** 创建文件 */
  CreateFile(data: CreateFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileResponse>;
  /** 创建项目 */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 创建场景 */
  CreateScenario(data: CreateScenarioRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScenarioResponse>;
  /** 删除告警通知接收组 */
  DeleteAlertChannel(data: DeleteAlertChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlertChannelResponse>;
  /** 删除定时任务 */
  DeleteCronJobs(data: DeleteCronJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCronJobsResponse>;
  /** 删除文件 */
  DeleteFiles(data: DeleteFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFilesResponse>;
  /** 删除任务 */
  DeleteJobs(data: DeleteJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteJobsResponse>;
  /** 删除项目 */
  DeleteProjects(data: DeleteProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectsResponse>;
  /** 删除场景 */
  DeleteScenarios(data: DeleteScenariosRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScenariosResponse>;
  /** 查询告警通知接收组 */
  DescribeAlertChannels(data: DescribeAlertChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertChannelsResponse>;
  /** 查询告警历史 */
  DescribeAlertRecords(data: DescribeAlertRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertRecordsResponse>;
  /** 查询系统支持的指标 */
  DescribeAvailableMetrics(data?: DescribeAvailableMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableMetricsResponse>;
  /** 查询检查点汇总信息 */
  DescribeCheckSummary(data: DescribeCheckSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckSummaryResponse>;
  /** 列出定时任务 */
  DescribeCronJobs(data: DescribeCronJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCronJobsResponse>;
  /** 查询文件列表 */
  DescribeFiles(data: DescribeFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFilesResponse>;
  /** 查询任务列表 */
  DescribeJobs(data: DescribeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobsResponse>;
  /** 查询标签值 */
  DescribeLabelValues(data: DescribeLabelValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLabelValuesResponse>;
  /** 查询指标所有的label及values值 */
  DescribeMetricLabelWithValues(data: DescribeMetricLabelWithValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMetricLabelWithValuesResponse>;
  /** 查询压测过程日志 */
  DescribeNormalLogs(data: DescribeNormalLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNormalLogsResponse>;
  /** 查询项目列表 */
  DescribeProjects(data?: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** 查询地域列表 */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询请求汇总信息 */
  DescribeRequestSummary(data: DescribeRequestSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRequestSummaryResponse>;
  /** 批量查询指标 */
  DescribeSampleBatchQuery(data: DescribeSampleBatchQueryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleBatchQueryResponse>;
  /** 查询采样日志 */
  DescribeSampleLogs(data: DescribeSampleLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleLogsResponse>;
  /** 批量查询指标矩阵 */
  DescribeSampleMatrixBatchQuery(data: DescribeSampleMatrixBatchQueryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleMatrixBatchQueryResponse>;
  /** 查询指标矩阵 */
  DescribeSampleMatrixQuery(data: DescribeSampleMatrixQueryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleMatrixQueryResponse>;
  /** 查询指标 */
  DescribeSampleQuery(data: DescribeSampleQueryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleQueryResponse>;
  /** 查询场景及对应的任务 */
  DescribeScenarioWithJobs(data?: DescribeScenarioWithJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScenarioWithJobsResponse>;
  /** 查询场景列表 */
  DescribeScenarios(data?: DescribeScenariosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScenariosResponse>;
  /** 生成临时COS凭证 */
  GenerateTmpKey(data: GenerateTmpKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateTmpKeyResponse>;
  /** 重启定时任务 */
  RestartCronJobs(data: RestartCronJobsRequest, config?: AxiosRequestConfig): AxiosPromise<RestartCronJobsResponse>;
  /** 创建并启动任务 */
  StartJob(data: StartJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartJobResponse>;
  /** 更新定时任务 */
  UpdateCronJob(data: UpdateCronJobRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCronJobResponse>;
  /** 更新关联文件场景 */
  UpdateFileScenarioRelation(data: UpdateFileScenarioRelationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFileScenarioRelationResponse>;
  /** 更新任务 */
  UpdateJob(data: UpdateJobRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateJobResponse>;
  /** 更新项目 */
  UpdateProject(data: UpdateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProjectResponse>;
  /** 更新场景 */
  UpdateScenario(data: UpdateScenarioRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateScenarioResponse>;
}

export declare type Versions = ["2021-07-28"];

export default Pts;
