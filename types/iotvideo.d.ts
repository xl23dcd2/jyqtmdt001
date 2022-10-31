/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AI模型申请信息 */
declare interface AIModelApplication {
  /** 产品ID */
  ProductId: string;
  /** 产品名称 */
  ProductName: string;
  /** 申请状态：1-已申请；2-已取消；3-已拒绝；4-已通过 */
  Status: number;
}

/** AI模型信息 */
declare interface AIModelInfo {
  /** 产品ID */
  ProductId: string;
  /** 产品名称 */
  ProductName: string;
  /** 申请状态：1-已申请；2-已取消；3-已拒绝；4-已通过 */
  Status: number;
  /** 可调用数量 */
  Total: number;
  /** 已调用数量 */
  Used: number;
  /** 申请时间 */
  ApplyTime: number;
  /** 审批通过时间 */
  ApprovalTime: number;
}

/** AI模型资源使用信息 */
declare interface AIModelUsageInfo {
  /** 开通时间 */
  CreateTime: number;
  /** 资源总量 */
  Total: number;
  /** 已使用资源数量 */
  Used: number;
}

/** 查询设备历史 */
declare interface ActionHistory {
  /** 设备名称 */
  DeviceName: string;
  /** 动作Id */
  ActionId: string;
  /** 动作名称 */
  ActionName: string;
  /** 请求时间 */
  ReqTime: number;
  /** 响应时间 */
  RspTime: number;
  /** 输入参数 */
  InputParams: string | null;
  /** 输出参数 */
  OutputParams: string | null;
  /** 调用方式 */
  Calling: string;
  /** 调用Id */
  ClientToken: string;
  /** 调用状态 */
  Status: string;
}

/** 账户流水 */
declare interface BalanceTransaction {
  /** 账户类型：1-设备接入 2-云存。 */
  AccountType: number;
  /** 账户变更类型：Rechareg-充值；CreateOrder-新购。 */
  Operation: string;
  /** 流水ID。 */
  DealId: string;
  /** 变更金额，单位：分（人民币）。 */
  Amount: number;
  /** 变更后账户余额，单位：分（人民币）。 */
  Balance: number;
  /** 变更时间。 */
  OperationTime: number;
}

/** 运营活动资源包信息 */
declare interface BonusInfo {
  /** 资源包ID */
  BonusId: number;
  /** 用户ID */
  UserId: string;
  /** 资源包配置ID */
  PackageId: string;
  /** 资源总数 */
  Total: number;
  /** 资源消耗总数 */
  Used: number;
  /** 资源包过期时间 */
  ExpireTime: number;
  /** 资源包创建时间 */
  CreateTime: number;
}

/** 云存事件 */
declare interface CloudStorageEvent {
  /** 事件起始时间（Unix 时间戳，秒级 */
  StartTime: number;
  /** 事件结束时间（Unix 时间戳，秒级 */
  EndTime: number;
  /** 事件缩略图 */
  Thumbnail: string;
  /** 事件ID */
  EventId: string;
}

/** 云存时间轴接口返回数据 */
declare interface CloudStorageTimeData {
  /** 云存时间轴信息列表 */
  TimeList: CloudStorageTimeInfo[];
  /** 播放地址 */
  VideoURL: string;
}

/** 云存时间轴信息 */
declare interface CloudStorageTimeInfo {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
}

/** 云存用户信息 */
declare interface CloudStorageUserInfo {
  /** 用户ID */
  UserId: string;
}

/** 数据转发描述 */
declare interface DataForward {
  /** 产品ID。 */
  ProductId: string;
  /** 转发地址。 */
  ForwardAddr: string;
  /** 转发状态。 */
  Status: number;
  /** 创建时间。 */
  CreateTime: number;
  /** 更新时间。 */
  UpdateTime: number;
  /** 1-数据信息转发 2-设备上下线状态转发 3-数据信息转发&设备上下线状态转发 */
  DataChose: number | null;
}

/** 设备数量统计 */
declare interface DeviceCntStats {
  /** 统计日期 */
  Date: string;
  /** 新增注册设备数 */
  NewRegisterCnt: number | null;
  /** 新增激活设备数 */
  NewActivateCnt: number | null;
  /** 活跃设备数 */
  ActiveCnt: number | null;
}

/** 设备通讯日志查询返回条目 */
declare interface DeviceCommLogItem {
  /** 时间 */
  Time: string;
  /** 日志类型，device 设备上行，shadow 服务端下行。 */
  Type: string;
  /** 通讯数据。 */
  Data: string;
}

/** 设备历史数据结构 */
declare interface DeviceDataHistoryItem {
  /** 时间点，毫秒时间戳 */
  Time: string;
  /** 字段取值 */
  Value: string;
}

/** 设备详细信息 */
declare interface DeviceInfo {
  /** 设备名 */
  DeviceName: string;
  /** 设备是否在线，0不在线，1在线，2获取失败，3未激活 */
  Online: number;
  /** 设备最后上线时间 */
  LoginTime: number;
  /** 设备密钥 */
  DevicePsk: string;
  /** 设备启用状态 0为停用 1为可用 */
  EnableState: number;
  /** 设备过期时间 */
  ExpireTime: number;
}

/** 设备签名信息 */
declare interface DeviceSignatureInfo {
  /** 设备名称 */
  DeviceName: string;
  /** 设备签名 */
  DeviceSignature: string;
}

/** 设备上下线日志记录 */
declare interface DeviceStatusLogItem {
  /** 时间 */
  Time: string;
  /** 状态类型： Online 上线，Offline 下线 */
  Type: string;
  /** 日志信息 */
  Data: string;
}

/** 设备固件更新状态 */
declare interface DeviceUpdateStatus {
  /** 设备名 */
  DeviceName: string;
  /** 最后处理时间 */
  LastProcessTime: number;
  /** 状态 */
  Status: number;
  /** 错误消息 */
  ErrMsg: string;
  /** 返回码 */
  Retcode: number;
  /** 目标更新版本 */
  DstVersion: string;
  /** 下载中状态时的下载进度 */
  Percent: number | null;
  /** 原版本号 */
  OriVersion: string | null;
  /** 任务ID */
  TaskId: number | null;
}

/** 设备事件的搜索结果项 */
declare interface EventHistoryItem {
  /** 事件的时间戳 */
  TimeStamp: number | null;
  /** 事件的产品ID */
  ProductId: string | null;
  /** 事件的设备名称 */
  DeviceName: string | null;
  /** 事件的标识符ID */
  EventId: string | null;
  /** 事件的类型 */
  Type: string | null;
  /** 事件的数据 */
  Data: string | null;
}

/** 设备固件详细信息 */
declare interface FirmwareInfo {
  /** 固件版本 */
  Version: string;
  /** 固件MD5值 */
  Md5sum: string;
  /** 固件创建时间 */
  CreateTime: number;
  /** 产品名称 */
  ProductName: string;
  /** 固件名称 */
  Name: string;
  /** 固件描述 */
  Description: string;
  /** 产品ID */
  ProductId: string;
}

/** 固件升级任务信息 */
declare interface FirmwareTaskInfo {
  /** 任务ID */
  TaskId: number | null;
  /** 任务状态 */
  Status: number | null;
  /** 任务类型 */
  Type: number | null;
  /** 任务创建时间 */
  CreateTime: number | null;
}

/** 消息数量统计 */
declare interface MessageCntStats {
  /** 统计日期 */
  Date: string;
  /** 物模型上行消息数 */
  UpMsgCnt: number | null;
  /** 物模型下行消息数 */
  DownMsgCnt: number | null;
  /** ntp消息数 */
  NtpMsgCnt: number | null;
}

/** 云存套餐包消耗统计 */
declare interface PackageConsumeStat {
  /** 云存套餐包id */
  PackageId: string;
  /** 云存套餐包名称 */
  PackageName: string;
  /** 消耗个数 */
  Cnt: number;
  /** 套餐包单价，单位分 */
  Price: number;
  /** 消耗来源，1预付费 */
  Source: number;
}

/** 套餐包消耗任务列表 */
declare interface PackageConsumeTask {
  /** 任务id */
  TaskId: number;
  /** 任务创始时间 */
  CreateTime: string;
  /** 任务状态，1待处理，2处理中，3已完成 */
  State: number;
}

/** 产品模型定义 */
declare interface ProductModelDefinition {
  /** 产品ID */
  ProductId: string;
  /** 模型定义 */
  ModelDefine: string;
  /** 更新时间，秒级时间戳 */
  UpdateTime: number;
  /** 创建时间，秒级时间戳 */
  CreateTime: number;
  /** 产品所属分类的模型快照（产品创建时刻的） */
  CategoryModel: string | null;
  /** 产品的连接类型的模型 */
  NetTypeModel: string | null;
}

/** 产品分类实体 */
declare interface ProductTemplate {
  /** 实体ID */
  Id: number;
  /** 分类字段 */
  CategoryKey: string;
  /** 分类名称 */
  CategoryName: string;
  /** 上层实体ID */
  ParentId: number;
  /** 物模型 */
  ModelTemplate: string;
  /** 排列顺序 */
  ListOrder: number | null;
  /** 分类图标地址 */
  IconUrl: string | null;
  /** 九宫格图片地址 */
  IconUrlGrid: string | null;
}

/** SDK日志项 */
declare interface SDKLogItem {
  /** 产品ID */
  ProductID: string;
  /** 设备名称 */
  DeviceName: string;
  /** 日志等级 */
  Level: string;
  /** 日志时间 */
  DateTime: string;
  /** 日志内容 */
  Content: string;
}

/** 搜索关键词 */
declare interface SearchKeyword {
  /** 搜索条件的Key */
  Key: string;
  /** 搜索条件的值 */
  Value?: string;
}

/** 状态统计信息 */
declare interface StatusStatistic {
  /** 任务状态 */
  Status: number | null;
  /** 统计总数 */
  Total: number | null;
}

/** 批次元数据 */
declare interface VideoBatch {
  /** 批次ID */
  Id: number;
  /** 用户ID */
  UserId: string;
  /** 产品ID */
  ProductId: string;
  /** 状态：1：待创建设备 2：创建中 3：已完成 */
  Status: number;
  /** 设备前缀 */
  DevPre: string;
  /** 设备数量 */
  DevNum: number;
  /** 已创建设备数量 */
  DevNumCreated: number;
  /** 批次下载地址 */
  BatchURL: string;
  /** 创建时间。unix时间戳 */
  CreateTime: number;
  /** 修改时间。unix时间戳 */
  UpdateTime: number;
}

/** video产品元数据 */
declare interface VideoProduct {
  /** 产品ID */
  ProductId: string;
  /** 产品名称 */
  ProductName: string;
  /** 产品设备类型（普通设备)	1.普通设备 */
  DeviceType: number;
  /** 认证方式：2：PSK */
  EncryptionType: number;
  /** 设备功能码 */
  Features: string[];
  /** 操作系统 */
  ChipOs: string;
  /** 芯片厂商id */
  ChipManufactureId: string;
  /** 芯片id */
  ChipId: string;
  /** 产品描述信息 */
  ProductDescription: string;
  /** 创建时间unix时间戳 */
  CreateTime: number;
  /** 修改时间unix时间戳 */
  UpdateTime: number;
  /** 连接类型，wifi表示WIFI连接，cellular表示4G连接 */
  NetType: string | null;
  /** 产品品类,113:摄像头,567:儿童手表,595:可视对讲门锁 */
  CategoryId: number | null;
  /** 产品有效年限 */
  ProductVaildYears: number | null;
}

declare interface ApplyAIModelRequest {
  /** AI模型ID */
  ModelId: string;
  /** 产品ID */
  ProductId: string;
}

declare interface ApplyAIModelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchUpdateFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件新版本号 */
  FirmwareVersion: string;
  /** 固件原版本号，根据文件列表升级固件不需要填写此参数 */
  FirmwareOriVersion?: string;
  /** 升级方式，0 静默升级 1 用户确认升级。 不填默认为静默升级方式 */
  UpgradeMethod?: number;
  /** 设备列表文件名称，根据文件列表升级固件需要填写此参数 */
  FileName?: string;
  /** 设备列表的文件md5值 */
  FileMd5?: string;
  /** 设备列表的文件大小值 */
  FileSize?: number;
  /** 需要升级的设备名称列表 */
  DeviceNames?: string[];
}

declare interface BatchUpdateFirmwareResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindCloudStorageUserRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 用户ID */
  UserId: string;
}

declare interface BindCloudStorageUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CallDeviceActionAsyncRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义 */
  ActionId: string;
  /** 输入参数 */
  InputParams?: string;
}

declare interface CallDeviceActionAsyncResponse {
  /** 调用Id */
  ClientToken: string | null;
  /** 异步调用状态 */
  Status: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CallDeviceActionSyncRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义 */
  ActionId: string;
  /** 输入参数 */
  InputParams?: string;
}

declare interface CallDeviceActionSyncResponse {
  /** 调用Id */
  ClientToken: string | null;
  /** 输出参数 */
  OutputParams: string | null;
  /** 返回状态，当设备不在线等部分情况，会通过该 Status 返回。 */
  Status: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CancelAIModelApplicationRequest {
  /** AI模型ID */
  ModelId: string;
  /** 产品ID */
  ProductId: string;
}

declare interface CancelAIModelApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CancelDeviceFirmwareTaskRequest {
  /** 产品ID */
  ProductID: string;
  /** 设备名称 */
  DeviceName: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件升级任务ID */
  TaskId: number;
}

declare interface CancelDeviceFirmwareTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckForwardAuthRequest {
  /** 控制台Skey */
  Skey: string;
  /** 队列类型 0.CMQ 1.Ckafka */
  QueueType: number;
}

declare interface CheckForwardAuthResponse {
  /** 腾讯云账号 */
  Endpoint: string;
  /** 结果 */
  Result: number;
  /** 产品ID */
  Productid: string;
  /** 错误消息 */
  ErrMsg: string;
  /** 队列类型 0.CMQ 1.Ckafka */
  QueueType: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ControlDeviceDataRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 属性数据, JSON格式字符串, 注意字段需要在物模型属性里定义 */
  Data: string;
  /** 请求类型 , 不填该参数或者 desired 表示下发属性给设备, reported 表示模拟设备上报属性 */
  Method?: string;
  /** 上报数据UNIX时间戳(毫秒), 仅对Method:reported有效 */
  DataTimestamp?: number;
}

declare interface ControlDeviceDataResponse {
  /** 返回信息 */
  Data: string;
  /** JSON字符串， 返回下发控制的结果信息, Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAIDetectionRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** AI模型ID */
  ModelId: string;
  /** 图片上传的开始时间 */
  StartTime: number;
  /** 图片上传的结束时间 */
  EndTime: number;
}

declare interface CreateAIDetectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBatchRequest {
  /** 产品ID */
  ProductId: string;
  /** 批次创建的设备数量 */
  DevNum: number;
  /** 批次创建的设备前缀。不超过24个字符 */
  DevPre: string;
}

declare interface CreateBatchResponse {
  /** 批次ID */
  BatchId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCOSCredentialsRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface CreateCOSCredentialsResponse {
  /** COS存储桶名称 */
  StorageBucket: string;
  /** COS存储桶区域 */
  StorageRegion: string;
  /** COS存储桶路径 */
  StoragePath: string;
  /** COS上传用的SecretID */
  SecretID: string;
  /** COS上传用的SecretKey */
  SecretKey: string;
  /** COS上传用的Token */
  Token: string;
  /** 密钥信息过期时间 */
  ExpiredTime: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存套餐ID：yc1m3d ： 全时3天存储月套餐。yc1m7d ： 全时7天存储月套餐。yc1m30d ：全时30天存储月套餐。yc1y3d ：全时3天存储年套餐。yc1y7d ：全时7天存储年套餐。yc1y30d ：全时30天存储年套餐。ye1m3d ：事件3天存储月套餐。ye1m7d ：事件7天存储月套餐。ye1m30d ：事件30天存储月套餐 。ye1y3d ：事件3天存储年套餐。ye1y7d ：事件7天存储年套餐。ye1y30d ：事件30天存储年套餐。yc1w7d : 全时7天存储周套餐。ye1w7d : 事件7天存储周套餐。lye1m3d：低功耗事件3天月套餐。lye1m7d：低功耗事件7天月套餐。lye1m30d：低功耗事件30天月套餐。lye1y3d：低功耗事件3天年套餐。lye1y7d：低功耗事件7天年套餐。lye1y30d：低功耗事件30天年套餐。 */
  PackageId: string;
  /** 如果当前设备已开启云存套餐，Override=1会使用新套餐覆盖原有套餐。不传此参数则默认为0。 */
  Override?: number;
}

declare interface CreateCloudStorageResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDataForwardRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 转发地址。如果有鉴权Token，则需要自行传入，例如 [{\"forward\":{\"api\":\"http://123.207.117.108:1080/sub.php\",\"token\":\"testtoken\"}}] */
  ForwardAddr: string;
  /** 1-数据信息转发 2-设备上下线状态转发 3-数据信息转发&设备上下线状态转发 */
  DataChose?: number;
}

declare interface CreateDataForwardResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateForwardRuleRequest {
  /** 产品ID */
  ProductID: string;
  /** 消息类型 */
  MsgType: number;
  /** 控制台Skey */
  Skey: string;
  /** 队列区域 */
  QueueRegion: string;
  /** 队列类型 0.CMQ 1.Ckafka */
  QueueType: number;
  /** 临时密钥 */
  Consecretid?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 队列或主题ID */
  QueueID?: string;
  /** 队列或主题名称 */
  QueueName?: string;
}

declare interface CreateForwardRuleResponse {
  /** 腾讯云账号 */
  Endpoint: string;
  /** 队列名 */
  QueueName: string;
  /** 产品ID */
  ProductID: string;
  /** 消息类型 */
  MsgType: number;
  /** 结果 */
  Result: number;
  /** 角色名称 */
  RoleName: string;
  /** 角色ID */
  RoleID: number;
  /** 队列区 */
  QueueRegion: string;
  /** 消息队列的类型。 0：CMQ，1：CKafaka */
  QueueType: number;
  /** 实例id， 目前只有Ckafaka会用到 */
  InstanceId: string;
  /** 实例名称，目前只有Ckafaka会用到 */
  InstanceName: string;
  /** 错误消息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProductRequest {
  /** 产品名称 */
  ProductName: string;
  /** 产品设备类型 1.普通设备 2.NVR设备 */
  DeviceType: number;
  /** 产品有效期 */
  ProductVaildYears: number;
  /** 设备功能码 ypsxth音频双向通话 spdxth视频单向通话 sxysp双向音视频注意：此字段只支持创建'摄像头'和'儿童手表'，摄像头传["ypsxth","spdxth"]，儿童手表传["ypsxth","spdxth","sxysp"]，创建其它品类的产品需要传递CategoryId字段，通过云api调用此接口时，如果传了CategoryId字段，将忽略Features字段,但Features仍需传值(可传任意字符串数组) */
  Features: string[];
  /** 芯片厂商id，通用设备填default */
  ChipManufactureId: string;
  /** 芯片id，通用设备填default */
  ChipId: string;
  /** 产品描述信息 */
  ProductDescription: string;
  /** 设备操作系统，通用设备填default */
  ChipOs: string;
  /** 认证方式 只支持取值为2 psk认证 */
  EncryptionType?: number;
  /** 产品品类id,113:摄像头,567:儿童手表,595:可视对讲门锁注意：通过云api调用此接口时，如果传了CategoryId字段，将忽略Features字段,但Features仍需传值(可传任意字符串数组) */
  CategoryId?: number;
  /** 连接类型，wifi表示WIFI连接，cellular表示4G连接 */
  NetType?: string;
}

declare interface CreateProductResponse {
  /** 产品详情 */
  Data: VideoProduct;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTaskFileUrlRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface CreateTaskFileUrlResponse {
  /** 任务文件上传链接 */
  Url: string;
  /** 任务文件名 */
  FileName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDeviceRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 设备名称。 */
  DeviceName: string;
}

declare interface DeleteDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本 */
  FirmwareVersion: string;
}

declare interface DeleteFirmwareResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteForwardRuleRequest {
  /** 产品ID */
  ProductID: string;
  /** 控制台Skey */
  Skey: string;
  /** 队列类型 */
  QueueType: number;
  /** 队列名称 */
  QueueName: string;
}

declare interface DeleteForwardRuleResponse {
  /** 腾讯云账号 */
  Endpoint: string;
  /** 队列名称 */
  QueueName: string;
  /** 产品ID */
  ProductID: string;
  /** 删除结果 0成功 其他不成功 */
  Result: number;
  /** 错误消息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProductRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DeleteProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAIModelApplicationsRequest {
  /** 模型ID */
  ModelId: string;
  /** 分页的大小，最大100 */
  Limit: number;
  /** 偏移量，Offset从0开始 */
  Offset: number;
  /** 产品ID */
  ProductId?: string;
}

declare interface DescribeAIModelApplicationsResponse {
  /** 申请记录数量 */
  TotalCount: number;
  /** 申请记录数组 */
  Applications: AIModelApplication[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAIModelChannelRequest {
  /** 模型ID */
  ModelId: string;
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeAIModelChannelResponse {
  /** 推送类型。ckafka：消息队列；forward：http/https推送 */
  Type: string;
  /** 第三方推送地址 */
  ForwardAddress: string | null;
  /** 第三方推送密钥 */
  ForwardKey: string | null;
  /** ckafka地域 */
  CKafkaRegion: string | null;
  /** ckafka实例 */
  CKafkaInstance: string | null;
  /** ckafka订阅主题 */
  CKafkaTopic: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAIModelUsageRequest {
  /** 模型ID */
  ModelId: string;
  /** 产品ID */
  ProductId: string;
  /** 偏移量，从0开始 */
  Offset: number;
  /** 分页的大小，最大100 */
  Limit: number;
}

declare interface DescribeAIModelUsageResponse {
  /** AI模型资源包总量 */
  TotalCount: number;
  /** AI模型资源包信息数组 */
  UsageInfo: AIModelUsageInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAIModelsRequest {
  /** 模型ID */
  ModelId: string;
  /** 申请状态：1-已申请；2-已取消；3-已拒绝；4-已通过 */
  Status: number;
  /** 偏移量，Offset从0开始 */
  Offset: number;
  /** 分页的大小，最大100 */
  Limit: number;
}

declare interface DescribeAIModelsResponse {
  /** AI模型数量 */
  TotalCount: number;
  /** AI模型信息数组 */
  Models: AIModelInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountRequest {
  /** 1设备，2云存，3ai */
  AccountType: number;
}

declare interface DescribeAccountResponse {
  /** 查询的账号id */
  Uin: string;
  /** 1线上计费，2线下计费 */
  BillType: number;
  /** 0未定义，1按套餐预付费，2按量后付费 */
  BillMode: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBalanceRequest {
  /** 账户类型：1-设备接入；2-云存。 */
  AccountType: number;
}

declare interface DescribeBalanceResponse {
  /** 账户余额，单位：分（人民币）。 */
  Balance: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBalanceTransactionsRequest {
  /** 账户类型：1-设备接入；2-云存。 */
  AccountType: number;
  /** 分页游标开始，默认为0开始拉取第一条。 */
  Offset: number;
  /** 分页每页数量。 */
  Limit: number;
  /** 流水类型：All-全部类型；Recharge-充值；CreateOrder-新购。默认为All */
  Operation?: string;
}

declare interface DescribeBalanceTransactionsResponse {
  /** 账户流水总数。 */
  TotalCount: number;
  /** 账户流水详情数组。 */
  Transactions: BalanceTransaction[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBatchRequest {
  /** 批次ID */
  BatchId: number;
}

declare interface DescribeBatchResponse {
  /** 批次详情 */
  Data: VideoBatch;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBatchsRequest {
  /** 产品ID */
  ProductId: string;
  /** 分页的大小，最大100 */
  Limit: number;
  /** 偏移量，Offset从0开始 */
  Offset: number;
}

declare interface DescribeBatchsResponse {
  /** 批次数量 */
  TotalCount: number;
  /** 批次列表详情 */
  Data: VideoBatch[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBonusesRequest {
  /** 分页拉取偏移 */
  Offset: number;
  /** 分页拉取数量 */
  Limit: number;
}

declare interface DescribeBonusesResponse {
  /** 资源包总数 */
  TotalCount: number;
  /** 资源包信息 */
  Bonuses: BonusInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCategoryRequest {
  /** Category ID。 */
  Id: number;
}

declare interface DescribeCategoryResponse {
  /** Category详情 */
  Data: ProductTemplate;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageDateRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 用户ID */
  UserId?: string;
}

declare interface DescribeCloudStorageDateResponse {
  /** 云存日期数组，["2021-01-05","2021-01-06"] */
  Data: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageEventsRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
  StartTime?: number;
  /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
  EndTime?: number;
  /** 请求上下文, 用作查询游标 */
  Context?: string;
  /** 查询数据项目的最大数量, 默认为10。假设传Size=10，返回的实际事件数量为N，则 5 <= N <= 10。 */
  Size?: number;
  /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
  EventId?: string;
  /** 用户ID */
  UserId?: string;
  /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
  ChannelId?: number;
}

declare interface DescribeCloudStorageEventsResponse {
  /** 云存事件列表 */
  Events: CloudStorageEvent[];
  /** 请求上下文, 用作查询游标 */
  Context: string;
  /** 拉取结果是否已经结束 */
  Listover: boolean;
  /** 内部结果数量，并不等同于事件总数。 */
  Total: number;
  /** 视频播放URL */
  VideoURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStoragePackageConsumeDetailsRequest {
  /** 开始日期 */
  StartDate: string;
  /** 结束日期 */
  EndDate: string;
}

declare interface DescribeCloudStoragePackageConsumeDetailsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStoragePackageConsumeStatsRequest {
  /** 开始日期 */
  StartDate: string;
  /** 结束日期，开始与结束日期间隔不可超过一年 */
  EndDate: string;
}

declare interface DescribeCloudStoragePackageConsumeStatsResponse {
  /** 统计列表详情 */
  Stats: PackageConsumeStat[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存用户ID */
  UserId?: string;
}

declare interface DescribeCloudStorageResponse {
  /** 云存开启状态，1为开启，0为未开启或已过期 */
  Status: number;
  /** 云存类型，1为全时云存，2为事件云存 */
  Type: number;
  /** 云存套餐过期时间 */
  ExpireTime: number;
  /** 云存回看时长 */
  ShiftDuration: number;
  /** 云存用户ID */
  UserId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageStreamDataRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 图片流事件开始时间 */
  StartTime: number;
}

declare interface DescribeCloudStorageStreamDataResponse {
  /** 图片流视频地址 */
  VideoStream: string;
  /** 图片流音频地址 */
  AudioStream: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageThumbnailRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 缩略图文件名 */
  Thumbnail: string;
}

declare interface DescribeCloudStorageThumbnailResponse {
  /** 缩略图访问地址 */
  ThumbnailURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageTimeRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存日期，例如"2020-01-05" */
  Date: string;
  /** 开始时间，unix时间 */
  StartTime?: number;
  /** 结束时间，unix时间 */
  EndTime?: number;
  /** 用户ID */
  UserId?: string;
}

declare interface DescribeCloudStorageTimeResponse {
  /** 接口返回数据 */
  Data: CloudStorageTimeData;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageUsersRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 分页拉取数量 */
  Limit: number;
  /** 分页拉取偏移 */
  Offset: number;
}

declare interface DescribeCloudStorageUsersResponse {
  /** 用户总数 */
  TotalCount: number;
  /** 用户信息 */
  Users: CloudStorageUserInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataForwardListRequest {
  /** 产品ID列表 */
  ProductIds: string;
}

declare interface DescribeDataForwardListResponse {
  /** 数据转发列表。 */
  DataForwardList: DataForward[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceActionHistoryRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 开始范围的 unix 毫秒时间戳 */
  MinTime: number;
  /** 结束范围的 unix 毫秒时间戳 */
  MaxTime: number;
  /** 动作Id */
  ActionId?: string;
  /** 查询条数 默认为0 最大不超过500 */
  Limit?: number;
  /** 游标，标识查询位置。 */
  Context?: string;
}

declare interface DescribeDeviceActionHistoryResponse {
  /** 总条数 */
  TotalCounts: number;
  /** 动作历史 */
  ActionHistories: ActionHistory[] | null;
  /** 用于标识查询结果的上下文，翻页用。 */
  Context: string | null;
  /** 搜索结果是否已经结束。 */
  Listover: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceCommLogRequest {
  /** 开始时间 13位时间戳 单位毫秒 */
  MinTime: number;
  /** 结束时间 13位时间戳 单位毫秒 */
  MaxTime: number;
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 返回条数 默认为50 */
  Limit?: number;
  /** 检索上下文 */
  Context?: string;
  /** 类型：shadow 下行，device 上行 默认为空则全部查询 */
  Type?: string;
}

declare interface DescribeDeviceCommLogResponse {
  /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
  Listover: boolean;
  /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
  Context: string;
  /** 日志数据结果数组，返回对应时间点及取值。 */
  Results: DeviceCommLogItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceDataHistoryRequest {
  /** 区间开始时间（Unix 时间戳，毫秒级） */
  MinTime: number;
  /** 区间结束时间（Unix 时间戳，毫秒级） */
  MaxTime: number;
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 属性字段名称，对应数据模板中功能属性的标识符 */
  FieldName: string;
  /** 返回条数 */
  Limit?: number[];
  /** 检索上下文 */
  Context?: string;
}

declare interface DescribeDeviceDataHistoryResponse {
  /** 属性字段名称，对应数据模板中功能属性的标识符 */
  FieldName: string | null;
  /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
  Listover: boolean | null;
  /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
  Context: string | null;
  /** 历史数据结果数组，返回对应时间点及取值。 */
  Results: DeviceDataHistoryItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceDataRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface DescribeDeviceDataResponse {
  /** 设备数据 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceDataStatsRequest {
  /** 开始日期 */
  StartDate: string;
  /** 结束日期 */
  EndDate: string;
  /** 产品id */
  ProductId?: string;
}

declare interface DescribeDeviceDataStatsResponse {
  /** 累计注册设备数 */
  RegisterCnt: number | null;
  /** 设备数量列表 */
  Data: DeviceCntStats[] | null;
  /** 总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceEventHistoryRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 搜索的事件类型：alert 表示告警，fault 表示故障，info 表示信息，为空则表示查询上述所有类型事件 */
  Type?: string;
  /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
  StartTime?: number;
  /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
  EndTime?: number;
  /** 搜索上下文, 用作查询游标 */
  Context?: string;
  /** 单次获取的历史数据项目的最大数量, 缺省10 */
  Size?: number;
  /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
  EventId?: string;
}

declare interface DescribeDeviceEventHistoryResponse {
  /** 搜索上下文, 用作查询游标 */
  Context: string | null;
  /** 搜索结果数量 */
  Total: number | null;
  /** 搜索结果是否已经结束 */
  Listover: boolean | null;
  /** 搜集结果集 */
  EventHistory: EventHistoryItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
}

declare interface DescribeDeviceResponse {
  /** 设备名 */
  DeviceName: string;
  /** 设备是否在线，0不在线，1在线，2获取失败，3未激活 */
  Online: number;
  /** 设备最后上线时间 */
  LoginTime: number;
  /** 设备密钥 */
  DevicePsk: string;
  /** 设备启用状态 */
  EnableState: number;
  /** 设备过期时间 */
  ExpireTime: number;
  /** 设备的sdk日志等级，0：关闭，1：错误，2：告警，3：信息，4：调试 */
  LogLevel: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceStatusLogRequest {
  /** 开始时间（毫秒） */
  MinTime: number;
  /** 结束时间（毫秒） */
  MaxTime: number;
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 返回条数 */
  Limit?: number;
  /** 检索上下文 */
  Context?: string;
}

declare interface DescribeDeviceStatusLogResponse {
  /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
  Listover: boolean | null;
  /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
  Context: string | null;
  /** 日志数据结果数组，返回对应时间点及取值。 */
  Results: DeviceStatusLogItem[] | null;
  /** 日志数据结果总条数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDevicesRequest {
  /** 需要查看设备列表的产品 ID */
  ProductId: string;
  /** 偏移量，Offset从0开始 */
  Offset: number;
  /** 分页的大小，最大100 */
  Limit: number;
  /** 需要过滤的设备名称 */
  DeviceName?: string;
}

declare interface DescribeDevicesResponse {
  /** 设备总数 */
  TotalCount: number;
  /** 设备详细信息列表 */
  Devices: DeviceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
}

declare interface DescribeFirmwareResponse {
  /** 固件版本号 */
  Version: string;
  /** 产品ID */
  ProductId: string;
  /** 固件名称 */
  Name: string | null;
  /** 固件描述 */
  Description: string | null;
  /** 固件Md5值 */
  Md5sum: string | null;
  /** 固件上传的秒级时间戳 */
  Createtime: number | null;
  /** 产品名称 */
  ProductName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFirmwareTaskDevicesRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本 */
  FirmwareVersion?: string;
  /** 筛选条件 */
  Filters?: SearchKeyword[];
  /** 查询偏移量 默认为0 */
  Offset?: number;
  /** 查询的数量 默认为50 */
  Limit?: number;
}

declare interface DescribeFirmwareTaskDevicesResponse {
  /** 固件升级任务的设备总数 */
  Total: number | null;
  /** 固件升级任务的设备列表 */
  Devices: DeviceUpdateStatus[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFirmwareTaskDistributionRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件升级任务ID */
  TaskId: number;
}

declare interface DescribeFirmwareTaskDistributionResponse {
  /** 固件升级任务状态分布信息 */
  StatusInfos: StatusStatistic[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFirmwareTaskRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件任务ID */
  TaskId: number;
}

declare interface DescribeFirmwareTaskResponse {
  /** 固件任务ID */
  TaskId: number | null;
  /** 固件任务状态 */
  Status: number | null;
  /** 固件任务创建时间，单位:秒 */
  CreateTime: number | null;
  /** 固件任务升级类型 */
  Type: number | null;
  /** 产品名称 */
  ProductName: string | null;
  /** 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级） */
  UpgradeMode: string | null;
  /** 产品ID */
  ProductId: string | null;
  /** 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回 */
  OriginalVersion: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFirmwareTaskStatisticsRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
}

declare interface DescribeFirmwareTaskStatisticsResponse {
  /** 升级成功的设备总数 */
  SuccessTotal: number | null;
  /** 升级失败的设备总数 */
  FailureTotal: number | null;
  /** 正在升级的设备总数 */
  UpgradingTotal: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFirmwareTasksRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 查询偏移量 */
  Offset: number;
  /** 返回查询结果条数 */
  Limit: number;
  /** 搜索过滤条件 */
  Filters?: SearchKeyword[];
}

declare interface DescribeFirmwareTasksResponse {
  /** 固件升级任务列表 */
  TaskInfos: FirmwareTaskInfo[] | null;
  /** 固件升级任务总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeForwardRuleRequest {
  /** 产品ID */
  ProductID: string;
  /** 控制台Skey */
  Skey: string;
  /** 队列类型，0：CMQ，1：Ckafka */
  QueueType: number;
  /** 临时密钥 */
  Consecretid?: string;
}

declare interface DescribeForwardRuleResponse {
  /** 腾讯云账号 */
  Endpoint: string;
  /** 队列名称 */
  QueueName: string;
  /** 产品ID */
  ProductID: string;
  /** 消息类型 1设备上报信息 2设备状态变化通知 3为全选 */
  MsgType: number;
  /** 结果 2表示禁用 其他为成功 */
  Result: number;
  /** 角色名 */
  RoleName: string;
  /** 角色ID */
  RoleID: number;
  /** 队列区域 */
  QueueRegion: string;
  /** 队列类型，0：CMQ，1：Ckafka */
  QueueType: number;
  /** 实例id， 目前只有Ckafaka会用到 */
  InstanceId: string;
  /** 实例名称，目前只有Ckafaka会用到 */
  InstanceName: string;
  /** 错误消息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMessageDataStatsRequest {
  /** 统计开始日期 */
  StartDate: string;
  /** 统计结束日期 */
  EndDate: string;
  /** 产品id */
  ProductId?: string;
}

declare interface DescribeMessageDataStatsResponse {
  /** 消息数量列表 */
  Data: MessageCntStats[] | null;
  /** 总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeModelDefinitionResponse {
  /** 产品数据模板 */
  Model: ProductModelDefinition;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePackageConsumeTaskRequest {
  /** 任务id */
  TaskId: number;
}

declare interface DescribePackageConsumeTaskResponse {
  /** 文件下载的url，文件详情是套餐包消耗详情 */
  URL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePackageConsumeTasksRequest {
  /** 分页单页量 */
  Limit: number;
  /** 分页的偏移量，第一页为0 */
  Offset: number;
}

declare interface DescribePackageConsumeTasksResponse {
  /** 总数 */
  TotalCount: number;
  /** 任务列表 */
  List: PackageConsumeTask[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductDynamicRegisterRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeProductDynamicRegisterResponse {
  /** 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备 */
  RegisterType: number;
  /** 动态注册产品密钥 */
  ProductSecret: string;
  /** 动态注册设备上限 */
  RegisterLimit: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductRequest {
  /** 产品id */
  ProductId: string;
}

declare interface DescribeProductResponse {
  /** 产品详情 */
  Data: VideoProduct;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductsRequest {
  /** 分页的大小，最大100 */
  Limit: number;
  /** 偏移量，Offset从0开始 */
  Offset: number;
}

declare interface DescribeProductsResponse {
  /** 总数 */
  TotalCount: number;
  /** 产品详情列表 */
  Data: VideoProduct[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePushChannelRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribePushChannelResponse {
  /** 推送类型。ckafka：消息队列；forward：http/https推送 */
  Type: string;
  /** 第三方推送地址 */
  ForwardAddress: string | null;
  /** 第三方推送密钥，为空表示不使用鉴权token。 */
  ForwardKey: string | null;
  /** ckafka地域 */
  CKafkaRegion: string | null;
  /** ckafka实例 */
  CKafkaInstance: string | null;
  /** ckafka订阅主题 */
  CKafkaTopic: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSDKLogRequest {
  /** 日志开始时间 */
  MinTime: number;
  /** 日志结束时间 */
  MaxTime: number;
  /** 查询关键字，可以同时支持键值查询和文本查询，例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。键值或文本可以包含多个，以空格隔开。其中可以索引的key包括：productid、devicename、loglevel一个典型的查询示例：productid:7JK1G72JNE devicename:name publish loglevel:WARN一个典型的查询示例：productid:ABCDE12345 devicename:test scene:SHADOW publish */
  Keywords: string;
  /** 日志检索上下文 */
  Context?: string;
  /** 查询条数 */
  MaxNum?: number;
}

declare interface DescribeSDKLogResponse {
  /** 日志检索上下文 */
  Context: string;
  /** 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context */
  Listover: boolean;
  /** 日志列表 */
  Results: SDKLogItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserRequest {
}

declare interface DescribeUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EditFirmwareRequest {
  /** 产品ID。 */
  ProductID: string;
  /** 固件版本号。 */
  FirmwareVersion: string;
  /** 固件名称。 */
  FirmwareName: string;
  /** 固件描述。 */
  FirmwareDescription?: string;
}

declare interface EditFirmwareResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GenSingleDeviceSignatureOfPublicRequest {
  /** 设备所属的产品ID */
  ProductId: string;
  /** 需要绑定的设备 */
  DeviceName: string;
  /** 设备绑定签名的有效时间,以秒为单位。取值范围：0 < Expire <= 86400，Expire == -1（十年） */
  Expire: number;
}

declare interface GenSingleDeviceSignatureOfPublicResponse {
  /** 设备签名信息 */
  DeviceSignature: DeviceSignatureInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GenerateSignedVideoURLRequest {
  /** 视频播放原始URL地址 */
  VideoURL: string;
  /** 播放链接过期时间 */
  ExpireTime: number;
}

declare interface GenerateSignedVideoURLResponse {
  /** 视频防盗链播放URL */
  SignedVideoURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAllFirmwareVersionRequest {
  /** 产品ID */
  ProductID: string;
}

declare interface GetAllFirmwareVersionResponse {
  /** 固件可用版本列表 */
  Version: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetFirmwareURLRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本 */
  FirmwareVersion: string;
}

declare interface GetFirmwareURLResponse {
  /** 固件URL */
  Url: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ImportModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
  /** 数据模板定义 */
  ModelSchema: string;
}

declare interface ImportModelDefinitionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InheritCloudStorageUserRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 原始用户ID */
  UserId: string;
  /** 目标用户ID */
  ToUserId: string;
}

declare interface InheritCloudStorageUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListFirmwaresRequest {
  /** 获取的页数 */
  PageNum: number;
  /** 分页的大小 */
  PageSize: number;
  /** 产品ID */
  ProductID?: string;
  /** 搜索过滤条件 */
  Filters?: SearchKeyword[];
}

declare interface ListFirmwaresResponse {
  /** 固件总数 */
  TotalCount: number;
  /** 固件列表 */
  Firmwares: FirmwareInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDataForwardRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 转发地址。如果有鉴权Token，则需要自行传入，例如 [{\"forward\":{\"api\":\"http://123.207.117.108:1080/sub.php\",\"token\":\"testtoken\"}}] */
  ForwardAddr: string;
  /** 1-数据信息转发 2-设备上下线状态转发 3-数据信息转发&设备上下线状态转发 */
  DataChose?: number;
}

declare interface ModifyDataForwardResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDataForwardStatusRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 转发状态，1启用，0禁用。 */
  Status: number;
}

declare interface ModifyDataForwardStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDeviceLogLevelRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 日志级别，0：关闭，1：错误，2：告警，3：信息，4：调试 */
  LogLevel: number;
}

declare interface ModifyDeviceLogLevelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDeviceRequest {
  /** 设备所属产品id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 要设置的设备状态，1为启用，0为禁用 */
  EnableState?: number;
}

declare interface ModifyDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyForwardRuleRequest {
  /** 产品ID */
  ProductID: string;
  /** 消息类型 */
  MsgType: number;
  /** 控制台Skey */
  Skey: string;
  /** 队列区域 */
  QueueRegion: string;
  /** 队列类型 0.CMQ 1.CKafka */
  QueueType: number;
  /** 临时密钥 */
  Consecretid?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 队列或主题ID */
  QueueID?: string;
  /** 队列或主题名称 */
  QueueName?: string;
}

declare interface ModifyForwardRuleResponse {
  /** 腾讯云账号 */
  Endpoint: string;
  /** 产品ID */
  ProductID: string;
  /** 结果 */
  Result: number;
  /** 错误信息 */
  ErrMsg: string;
  /** 队列类型 0.CMQ 1.CKafka */
  QueueType: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
  /** 数据模板定义 */
  ModelSchema: string;
}

declare interface ModifyModelDefinitionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProductDynamicRegisterRequest {
  /** 产品ID */
  ProductId: string;
  /** 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备 */
  RegisterType: number;
  /** 动态注册设备上限 */
  RegisterLimit: number;
}

declare interface ModifyProductDynamicRegisterResponse {
  /** 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备 */
  RegisterType: number;
  /** 动态注册产品密钥 */
  ProductSecret: string;
  /** 动态注册设备上限 */
  RegisterLimit: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProductRequest {
  /** 产品id */
  ProductId: string;
  /** 修改的产品名称 （支持中文、英文、数字、下划线组合，最多不超过20个字符） */
  ProductName?: string;
  /** 修改的产品描述 （最多不超过128个字符） */
  ProductDescription?: string;
}

declare interface ModifyProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPushChannelRequest {
  /** 产品ID */
  ProductId: string;
  /** 推送类型。ckafka：消息队列；forward：http/https推送 */
  Type: string;
  /** 第三方推送地址 */
  ForwardAddress?: string;
  /** 第三方推送密钥，不填写则不生成签名。 */
  ForwardKey?: string;
  /** ckafka地域 */
  CKafkaRegion?: string;
  /** ckafka实例 */
  CKafkaInstance?: string;
  /** ckafka订阅主题 */
  CKafkaTopic?: string;
}

declare interface ModifyPushChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PublishMessageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 消息发往的主题 */
  Topic: string;
  /** 云端下发到设备的控制报文 */
  Payload: string;
  /** 消息服务质量等级，取值为0或1 */
  Qos?: number;
  /** Payload的内容编码格式，取值为base64或空。base64表示云端将接收到的base64编码后的报文再转换成二进制报文下发至设备，为空表示不作转换，透传下发至设备 */
  PayloadEncoding?: string;
}

declare interface PublishMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReportAliveDeviceRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface ReportAliveDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
  ChannelId?: number;
  /** 云存用户Id，为空则为默认云存空间。 */
  UserId?: string;
}

declare interface ResetCloudStorageResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RetryDeviceFirmwareTaskRequest {
  /** 产品ID */
  ProductID: string;
  /** 设备名称 */
  DeviceName: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件升级任务ID */
  TaskId: number;
}

declare interface RetryDeviceFirmwareTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetForwardAuthRequest {
  /** 控制台Skey */
  Skey: string;
  /** 消息队列类型 0.CMQ 1.CKafka */
  QueueType: number;
}

declare interface SetForwardAuthResponse {
  /** 腾讯云账号 */
  Endpoint: string;
  /** 结果 */
  Result: number;
  /** 角色名 */
  RoleName: string;
  /** 角色ID */
  RoleID: number;
  /** 消息队列类型 0.CMQ 1.CKafka */
  QueueType: number;
  /** 错误消息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TransferCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 已开通云存的设备名称 */
  DeviceName: string;
  /** 未开通云存的设备名称 */
  ToDeviceName: string;
}

declare interface TransferCloudStorageResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAIModelChannelRequest {
  /** 模型ID */
  ModelId: string;
  /** 产品ID */
  ProductId: string;
  /** 推送类型。ckafka：消息队列；forward：http/https推送 */
  Type: string;
  /** 第三方推送地址 */
  ForwardAddress?: string;
  /** 第三方推送密钥，不填写则腾讯云自动生成。 */
  ForwardKey?: string;
  /** ckafka地域 */
  CKafkaRegion?: string;
  /** ckafka实例 */
  CKafkaInstance?: string;
  /** ckafka订阅主题 */
  CKafkaTopic?: string;
}

declare interface UpdateAIModelChannelResponse {
  /** 第三方推送密钥，如果选择自动生成则会返回此字段 */
  ForwardKey: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UploadFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件的MD5值 */
  Md5sum: string;
  /** 固件的大小 */
  FileSize: number;
  /** 固件名称 */
  FirmwareName?: string;
  /** 固件描述 */
  FirmwareDescription?: string;
}

declare interface UploadFirmwareResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface WakeUpDeviceRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface WakeUpDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20201215 {
  interface VersionHeader { headers: { 'X-TC-Version': '2020-12-15' } }

  /** AI模型申请信息 */
  interface AIModelApplication {
    /** 产品ID */
    ProductId: string;
    /** 产品名称 */
    ProductName: string;
    /** 申请状态：1-已申请；2-已取消；3-已拒绝；4-已通过 */
    Status: number;
  }

  /** AI模型信息 */
  interface AIModelInfo {
    /** 产品ID */
    ProductId: string;
    /** 产品名称 */
    ProductName: string;
    /** 申请状态：1-已申请；2-已取消；3-已拒绝；4-已通过 */
    Status: number;
    /** 可调用数量 */
    Total: number;
    /** 已调用数量 */
    Used: number;
    /** 申请时间 */
    ApplyTime: number;
    /** 审批通过时间 */
    ApprovalTime: number;
  }

  /** AI模型资源使用信息 */
  interface AIModelUsageInfo {
    /** 开通时间 */
    CreateTime: number;
    /** 资源总量 */
    Total: number;
    /** 已使用资源数量 */
    Used: number;
  }

  /** 查询设备历史 */
  interface ActionHistory {
    /** 设备名称 */
    DeviceName: string;
    /** 动作Id */
    ActionId: string;
    /** 动作名称 */
    ActionName: string;
    /** 请求时间 */
    ReqTime: number;
    /** 响应时间 */
    RspTime: number;
    /** 输入参数 */
    InputParams: string | null;
    /** 输出参数 */
    OutputParams: string | null;
    /** 调用方式 */
    Calling: string;
    /** 调用Id */
    ClientToken: string;
    /** 调用状态 */
    Status: string;
  }

  /** 账户流水 */
  interface BalanceTransaction {
    /** 账户类型：1-设备接入 2-云存。 */
    AccountType: number;
    /** 账户变更类型：Rechareg-充值；CreateOrder-新购。 */
    Operation: string;
    /** 流水ID。 */
    DealId: string;
    /** 变更金额，单位：分（人民币）。 */
    Amount: number;
    /** 变更后账户余额，单位：分（人民币）。 */
    Balance: number;
    /** 变更时间。 */
    OperationTime: number;
  }

  /** 云存事件 */
  interface CloudStorageEvent {
    /** 事件起始时间（Unix 时间戳，秒级 */
    StartTime: number;
    /** 事件结束时间（Unix 时间戳，秒级 */
    EndTime: number;
    /** 事件缩略图 */
    Thumbnail: string;
    /** 事件ID */
    EventId: string;
  }

  /** 云存时间轴接口返回数据 */
  interface CloudStorageTimeData {
    /** 云存时间轴信息列表 */
    TimeList: CloudStorageTimeInfo[];
    /** 播放地址 */
    VideoURL: string;
  }

  /** 云存时间轴信息 */
  interface CloudStorageTimeInfo {
    /** 开始时间 */
    StartTime: number;
    /** 结束时间 */
    EndTime: number;
  }

  /** 云存用户信息 */
  interface CloudStorageUserInfo {
    /** 用户ID */
    UserId: string;
  }

  /** 数据转发描述 */
  interface DataForward {
    /** 产品ID。 */
    ProductId: string;
    /** 转发地址。 */
    ForwardAddr: string;
    /** 转发状态。 */
    Status: number;
    /** 创建时间。 */
    CreateTime: number;
    /** 更新时间。 */
    UpdateTime: number;
    /** 1-数据信息转发 2-设备上下线状态转发 3-数据信息转发&设备上下线状态转发 */
    DataChose: number | null;
  }

  /** 设备通讯日志查询返回条目 */
  interface DeviceCommLogItem {
    /** 时间 */
    Time: string;
    /** 日志类型，device 设备上行，shadow 服务端下行。 */
    Type: string;
    /** 通讯数据。 */
    Data: string;
  }

  /** 设备历史数据结构 */
  interface DeviceDataHistoryItem {
    /** 时间点，毫秒时间戳 */
    Time: string;
    /** 字段取值 */
    Value: string;
  }

  /** 设备详细信息 */
  interface DeviceInfo {
    /** 设备名 */
    DeviceName: string;
    /** 设备是否在线，0不在线，1在线，2获取失败，3未激活 */
    Online: number;
    /** 设备最后上线时间 */
    LoginTime: number;
    /** 设备密钥 */
    DevicePsk: string;
    /** 设备启用状态 0为停用 1为可用 */
    EnableState: number;
    /** 设备过期时间 */
    ExpireTime: number;
  }

  /** 设备上下线日志记录 */
  interface DeviceStatusLogItem {
    /** 时间 */
    Time: string;
    /** 状态类型： Online 上线，Offline 下线 */
    Type: string;
    /** 日志信息 */
    Data: string;
  }

  /** 设备固件更新状态 */
  interface DeviceUpdateStatus {
    /** 设备名 */
    DeviceName: string;
    /** 最后处理时间 */
    LastProcessTime: number;
    /** 状态 */
    Status: number;
    /** 错误消息 */
    ErrMsg: string;
    /** 返回码 */
    Retcode: number;
    /** 目标更新版本 */
    DstVersion: string;
    /** 下载中状态时的下载进度 */
    Percent: number | null;
    /** 原版本号 */
    OriVersion: string | null;
    /** 任务ID */
    TaskId: number | null;
  }

  /** 设备事件的搜索结果项 */
  interface EventHistoryItem {
    /** 事件的时间戳 */
    TimeStamp: number | null;
    /** 事件的产品ID */
    ProductId: string | null;
    /** 事件的设备名称 */
    DeviceName: string | null;
    /** 事件的标识符ID */
    EventId: string | null;
    /** 事件的类型 */
    Type: string | null;
    /** 事件的数据 */
    Data: string | null;
  }

  /** 设备固件详细信息 */
  interface FirmwareInfo {
    /** 固件版本 */
    Version: string;
    /** 固件MD5值 */
    Md5sum: string;
    /** 固件创建时间 */
    CreateTime: number;
    /** 产品名称 */
    ProductName: string;
    /** 固件名称 */
    Name: string;
    /** 固件描述 */
    Description: string;
    /** 产品ID */
    ProductId: string;
  }

  /** 固件升级任务信息 */
  interface FirmwareTaskInfo {
    /** 任务ID */
    TaskId: number | null;
    /** 任务状态 */
    Status: number | null;
    /** 任务类型 */
    Type: number | null;
    /** 任务创建时间 */
    CreateTime: number | null;
  }

  /** 产品模型定义 */
  interface ProductModelDefinition {
    /** 产品ID */
    ProductId: string;
    /** 模型定义 */
    ModelDefine: string;
    /** 更新时间，秒级时间戳 */
    UpdateTime: number;
    /** 创建时间，秒级时间戳 */
    CreateTime: number;
    /** 产品所属分类的模型快照（产品创建时刻的） */
    CategoryModel: string | null;
    /** 产品的连接类型的模型 */
    NetTypeModel: string | null;
  }

  /** 产品分类实体 */
  interface ProductTemplate {
    /** 实体ID */
    Id: number;
    /** 分类字段 */
    CategoryKey: string;
    /** 分类名称 */
    CategoryName: string;
    /** 上层实体ID */
    ParentId: number;
    /** 物模型 */
    ModelTemplate: string;
    /** 排列顺序 */
    ListOrder: number | null;
    /** 分类图标地址 */
    IconUrl: string | null;
    /** 九宫格图片地址 */
    IconUrlGrid: string | null;
  }

  /** SDK日志项 */
  interface SDKLogItem {
    /** 产品ID */
    ProductID: string;
    /** 设备名称 */
    DeviceName: string;
    /** 日志等级 */
    Level: string;
    /** 日志时间 */
    DateTime: string;
    /** 日志内容 */
    Content: string;
  }

  /** 搜索关键词 */
  interface SearchKeyword {
    /** 搜索条件的Key */
    Key: string;
    /** 搜索条件的值 */
    Value?: string;
  }

  /** 状态统计信息 */
  interface StatusStatistic {
    /** 任务状态 */
    Status: number | null;
    /** 统计总数 */
    Total: number | null;
  }

  /** 批次元数据 */
  interface VideoBatch {
    /** 批次ID */
    Id: number;
    /** 用户ID */
    UserId: string;
    /** 产品ID */
    ProductId: string;
    /** 状态：1：待创建设备 2：创建中 3：已完成 */
    Status: number;
    /** 设备前缀 */
    DevPre: string;
    /** 设备数量 */
    DevNum: number;
    /** 已创建设备数量 */
    DevNumCreated: number;
    /** 批次下载地址 */
    BatchURL: string;
    /** 创建时间。unix时间戳 */
    CreateTime: number;
    /** 修改时间。unix时间戳 */
    UpdateTime: number;
  }

  /** video产品元数据 */
  interface VideoProduct {
    /** 产品ID */
    ProductId: string;
    /** 产品名称 */
    ProductName: string;
    /** 产品设备类型（普通设备)	1.普通设备 */
    DeviceType: number;
    /** 认证方式：2：PSK */
    EncryptionType: number;
    /** 设备功能码 */
    Features: string[];
    /** 操作系统 */
    ChipOs: string;
    /** 芯片厂商id */
    ChipManufactureId: string;
    /** 芯片id */
    ChipId: string;
    /** 产品描述信息 */
    ProductDescription: string;
    /** 创建时间unix时间戳 */
    CreateTime: number;
    /** 修改时间unix时间戳 */
    UpdateTime: number;
    /** 连接类型，wifi表示WIFI连接，cellular表示4G连接 */
    NetType: string | null;
  }

  interface ApplyAIModelRequest {
    /** AI模型ID */
    ModelId: string;
    /** 产品ID */
    ProductId: string;
  }

  interface ApplyAIModelResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface BatchUpdateFirmwareRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件新版本号 */
    FirmwareVersion: string;
    /** 固件原版本号，根据文件列表升级固件不需要填写此参数 */
    FirmwareOriVersion?: string;
    /** 升级方式，0 静默升级 1 用户确认升级。 不填默认为静默升级方式 */
    UpgradeMethod?: number;
    /** 设备列表文件名称，根据文件列表升级固件需要填写此参数 */
    FileName?: string;
    /** 设备列表的文件md5值 */
    FileMd5?: string;
    /** 设备列表的文件大小值 */
    FileSize?: number;
    /** 需要升级的设备名称列表 */
    DeviceNames?: string[];
  }

  interface BatchUpdateFirmwareResponse {
    /** 任务ID */
    TaskId: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface BindCloudStorageUserRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 用户ID */
    UserId: string;
  }

  interface BindCloudStorageUserResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CancelAIModelApplicationRequest {
    /** AI模型ID */
    ModelId: string;
    /** 产品ID */
    ProductId: string;
  }

  interface CancelAIModelApplicationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CancelDeviceFirmwareTaskRequest {
    /** 产品ID */
    ProductID: string;
    /** 设备名称 */
    DeviceName: string;
    /** 固件版本号 */
    FirmwareVersion: string;
    /** 固件升级任务ID */
    TaskId: number;
  }

  interface CancelDeviceFirmwareTaskResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckForwardAuthRequest {
    /** 控制台Skey */
    Skey: string;
    /** 队列类型 0.CMQ 1.Ckafka */
    QueueType: number;
  }

  interface CheckForwardAuthResponse {
    /** 腾讯云账号 */
    Endpoint: string;
    /** 结果 */
    Result: number;
    /** 产品ID */
    Productid: string;
    /** 错误消息 */
    ErrMsg: string;
    /** 队列类型 0.CMQ 1.Ckafka */
    QueueType: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ControlDeviceDataRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 属性数据, JSON格式字符串, 注意字段需要在物模型属性里定义 */
    Data: string;
    /** 请求类型 , 不填该参数或者 desired 表示下发属性给设备, reported 表示模拟设备上报属性 */
    Method?: string;
    /** 上报数据UNIX时间戳(毫秒), 仅对Method:reported有效 */
    DataTimestamp?: number;
  }

  interface ControlDeviceDataResponse {
    /** 返回信息 */
    Data: string;
    /** JSON字符串， 返回下发控制的结果信息, Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic */
    Result: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateAIDetectionRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** AI模型ID */
    ModelId: string;
    /** 图片上传的开始时间 */
    StartTime: number;
    /** 图片上传的结束时间 */
    EndTime: number;
  }

  interface CreateAIDetectionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateBatchRequest {
    /** 产品ID */
    ProductId: string;
    /** 批次创建的设备数量 */
    DevNum: number;
    /** 批次创建的设备前缀。不超过24个字符 */
    DevPre: string;
  }

  interface CreateBatchResponse {
    /** 批次ID */
    BatchId: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateCOSCredentialsRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
  }

  interface CreateCOSCredentialsResponse {
    /** COS存储桶名称 */
    StorageBucket: string;
    /** COS存储桶区域 */
    StorageRegion: string;
    /** COS存储桶路径 */
    StoragePath: string;
    /** COS上传用的SecretID */
    SecretID: string;
    /** COS上传用的SecretKey */
    SecretKey: string;
    /** COS上传用的Token */
    Token: string;
    /** 密钥信息过期时间 */
    ExpiredTime: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateCloudStorageRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 云存套餐ID：yc1m3d ： 全时3天存储月套餐。yc1m7d ： 全时7天存储月套餐。yc1m30d ：全时30天存储月套餐。yc1y3d ：全时3天存储年套餐。yc1y7d ：全时7天存储年套餐。yc1y30d ：全时30天存储年套餐。ye1m3d ：事件3天存储月套餐。ye1m7d ：事件7天存储月套餐。ye1m30d ：事件30天存储月套餐 。ye1y3d ：事件3天存储年套餐。ye1y7d ：事件7天存储年套餐。ye1y30d ：事件30天存储年套餐。yc1w7d : 全时7天存储周套餐。ye1w7d : 事件7天存储周套餐。 */
    PackageId: string;
    /** 如果当前设备已开启云存套餐，Override=1会使用新套餐覆盖原有套餐。不传此参数则默认为0。 */
    Override?: number;
  }

  interface CreateCloudStorageResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateDataForwardRequest {
    /** 产品ID。 */
    ProductId: string;
    /** 转发地址。如果有鉴权Token，则需要自行传入，例如 [{\"forward\":{\"api\":\"http://123.207.117.108:1080/sub.php\",\"token\":\"testtoken\"}}] */
    ForwardAddr: string;
    /** 1-数据信息转发 2-设备上下线状态转发 3-数据信息转发&设备上下线状态转发 */
    DataChose?: number;
  }

  interface CreateDataForwardResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateForwardRuleRequest {
    /** 产品ID */
    ProductID: string;
    /** 消息类型 */
    MsgType: number;
    /** 控制台Skey */
    Skey: string;
    /** 队列区域 */
    QueueRegion: string;
    /** 队列类型 0.CMQ 1.Ckafka */
    QueueType: number;
    /** 临时密钥 */
    Consecretid?: string;
    /** 实例ID */
    InstanceId?: string;
    /** 实例名称 */
    InstanceName?: string;
    /** 队列或主题ID */
    QueueID?: string;
    /** 队列或主题名称 */
    QueueName?: string;
  }

  interface CreateForwardRuleResponse {
    /** 腾讯云账号 */
    Endpoint: string;
    /** 队列名 */
    QueueName: string;
    /** 产品ID */
    ProductID: string;
    /** 消息类型 */
    MsgType: number;
    /** 结果 */
    Result: number;
    /** 角色名称 */
    RoleName: string;
    /** 角色ID */
    RoleID: number;
    /** 队列区 */
    QueueRegion: string;
    /** 消息队列的类型。 0：CMQ，1：CKafaka */
    QueueType: number;
    /** 实例id， 目前只有Ckafaka会用到 */
    InstanceId: string;
    /** 实例名称，目前只有Ckafaka会用到 */
    InstanceName: string;
    /** 错误消息 */
    ErrMsg: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateProductRequest {
    /** 产品名称 */
    ProductName: string;
    /** 产品设备类型 1.普通设备 2.NVR设备 */
    DeviceType: number;
    /** 产品有效期 */
    ProductVaildYears: number;
    /** 设备功能码 ypsxth音频双向通话 spdxth视频单向通话 */
    Features: string[];
    /** 设备操作系统，通用设备填default */
    ChipOs: string;
    /** 芯片厂商id，通用设备填default */
    ChipManufactureId: string;
    /** 芯片id，通用设备填default */
    ChipId: string;
    /** 产品描述信息 */
    ProductDescription: string;
    /** 认证方式 只支持取值为2 psk认证 */
    EncryptionType?: number;
    /** 连接类型，wifi表示WIFI连接，cellular表示4G连接 */
    NetType?: string;
  }

  interface CreateProductResponse {
    /** 产品详情 */
    Data: VideoProduct;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateTaskFileUrlRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface CreateTaskFileUrlResponse {
    /** 任务文件上传链接 */
    Url: string;
    /** 任务文件名 */
    FileName: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteDeviceRequest {
    /** 产品ID。 */
    ProductId: string;
    /** 设备名称。 */
    DeviceName: string;
  }

  interface DeleteDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteFirmwareRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本 */
    FirmwareVersion: string;
  }

  interface DeleteFirmwareResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteForwardRuleRequest {
    /** 产品ID */
    ProductID: string;
    /** 控制台Skey */
    Skey: string;
    /** 队列类型 */
    QueueType: number;
    /** 队列名称 */
    QueueName: string;
  }

  interface DeleteForwardRuleResponse {
    /** 腾讯云账号 */
    Endpoint: string;
    /** 队列名称 */
    QueueName: string;
    /** 产品ID */
    ProductID: string;
    /** 删除结果 0成功 其他不成功 */
    Result: number;
    /** 错误消息 */
    ErrMsg: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteProductRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DeleteProductResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeAIModelApplicationsRequest {
    /** 模型ID */
    ModelId: string;
    /** 分页的大小，最大100 */
    Limit: number;
    /** 偏移量，Offset从0开始 */
    Offset: number;
    /** 产品ID */
    ProductId?: string;
  }

  interface DescribeAIModelApplicationsResponse {
    /** 申请记录数量 */
    TotalCount: number;
    /** 申请记录数组 */
    Applications: AIModelApplication[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeAIModelChannelRequest {
    /** 模型ID */
    ModelId: string;
    /** 产品ID */
    ProductId: string;
  }

  interface DescribeAIModelChannelResponse {
    /** 推送类型。ckafka：消息队列；forward：http/https推送 */
    Type: string;
    /** 第三方推送地址 */
    ForwardAddress: string | null;
    /** 第三方推送密钥 */
    ForwardKey: string | null;
    /** ckafka地域 */
    CKafkaRegion: string | null;
    /** ckafka实例 */
    CKafkaInstance: string | null;
    /** ckafka订阅主题 */
    CKafkaTopic: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeAIModelUsageRequest {
    /** 模型ID */
    ModelId: string;
    /** 产品ID */
    ProductId: string;
    /** 偏移量，从0开始 */
    Offset: number;
    /** 分页的大小，最大100 */
    Limit: number;
  }

  interface DescribeAIModelUsageResponse {
    /** AI模型资源包总量 */
    TotalCount: number;
    /** AI模型资源包信息数组 */
    UsageInfo: AIModelUsageInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeAIModelsRequest {
    /** 模型ID */
    ModelId: string;
    /** 申请状态：1-已申请；2-已取消；3-已拒绝；4-已通过 */
    Status: number;
    /** 偏移量，Offset从0开始 */
    Offset: number;
    /** 分页的大小，最大100 */
    Limit: number;
  }

  interface DescribeAIModelsResponse {
    /** AI模型数量 */
    TotalCount: number;
    /** AI模型信息数组 */
    Models: AIModelInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeBalanceRequest {
    /** 账户类型：1-设备接入；2-云存。 */
    AccountType: number;
  }

  interface DescribeBalanceResponse {
    /** 账户余额，单位：分（人民币）。 */
    Balance: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeBalanceTransactionsRequest {
    /** 账户类型：1-设备接入；2-云存。 */
    AccountType: number;
    /** 分页游标开始，默认为0开始拉取第一条。 */
    Offset: number;
    /** 分页每页数量。 */
    Limit: number;
    /** 流水类型：All-全部类型；Recharge-充值；CreateOrder-新购。默认为All */
    Operation?: string;
  }

  interface DescribeBalanceTransactionsResponse {
    /** 账户流水总数。 */
    TotalCount: number;
    /** 账户流水详情数组。 */
    Transactions: BalanceTransaction[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeBatchRequest {
    /** 批次ID */
    BatchId: number;
  }

  interface DescribeBatchResponse {
    /** 批次详情 */
    Data: VideoBatch;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeBatchsRequest {
    /** 产品ID */
    ProductId: string;
    /** 分页的大小，最大100 */
    Limit: number;
    /** 偏移量，Offset从0开始 */
    Offset: number;
  }

  interface DescribeBatchsResponse {
    /** 批次数量 */
    TotalCount: number;
    /** 批次列表详情 */
    Data: VideoBatch[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCategoryRequest {
    /** Category ID。 */
    Id: number;
  }

  interface DescribeCategoryResponse {
    /** Category详情 */
    Data: ProductTemplate;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCloudStorageDateRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 用户ID */
    UserId?: string;
  }

  interface DescribeCloudStorageDateResponse {
    /** 云存日期数组，["2021-01-05","2021-01-06"] */
    Data: string[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCloudStorageEventsRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
    StartTime?: number;
    /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
    EndTime?: number;
    /** 请求上下文, 用作查询游标 */
    Context?: string;
    /** 查询数据项目的最大数量, 默认为10。假设传Size=10，返回的实际事件数量为N，则 5 <= N <= 10。 */
    Size?: number;
    /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
    EventId?: string;
    /** 用户ID */
    UserId?: string;
    /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
    ChannelId?: number;
  }

  interface DescribeCloudStorageEventsResponse {
    /** 云存事件列表 */
    Events: CloudStorageEvent[];
    /** 请求上下文, 用作查询游标 */
    Context: string;
    /** 拉取结果是否已经结束 */
    Listover: boolean;
    /** 内部结果数量，并不等同于事件总数。 */
    Total: number;
    /** 视频播放URL */
    VideoURL: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCloudStorageRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 云存用户ID */
    UserId?: string;
  }

  interface DescribeCloudStorageResponse {
    /** 云存开启状态，1为开启，0为未开启或已过期 */
    Status: number;
    /** 云存类型，1为全时云存，2为事件云存 */
    Type: number;
    /** 云存套餐过期时间 */
    ExpireTime: number;
    /** 云存回看时长 */
    ShiftDuration: number;
    /** 云存用户ID */
    UserId: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCloudStorageThumbnailRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 缩略图文件名 */
    Thumbnail: string;
  }

  interface DescribeCloudStorageThumbnailResponse {
    /** 缩略图访问地址 */
    ThumbnailURL: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCloudStorageTimeRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 云存日期，例如"2020-01-05" */
    Date: string;
    /** 开始时间，unix时间 */
    StartTime?: number;
    /** 结束时间，unix时间 */
    EndTime?: number;
    /** 用户ID */
    UserId?: string;
  }

  interface DescribeCloudStorageTimeResponse {
    /** 接口返回数据 */
    Data: CloudStorageTimeData;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCloudStorageUsersRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 分页拉取数量 */
    Limit: number;
    /** 分页拉取偏移 */
    Offset: number;
  }

  interface DescribeCloudStorageUsersResponse {
    /** 用户总数 */
    TotalCount: number;
    /** 用户信息 */
    Users: CloudStorageUserInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDataForwardListRequest {
    /** 产品ID列表 */
    ProductIds: string;
  }

  interface DescribeDataForwardListResponse {
    /** 数据转发列表。 */
    DataForwardList: DataForward[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceActionHistoryRequest {
    /** 产品Id */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 开始范围的 unix 毫秒时间戳 */
    MinTime: number;
    /** 结束范围的 unix 毫秒时间戳 */
    MaxTime: number;
    /** 动作Id */
    ActionId?: string;
    /** 查询条数 默认为0 最大不超过500 */
    Limit?: number;
    /** 游标，标识查询位置。 */
    Context?: string;
  }

  interface DescribeDeviceActionHistoryResponse {
    /** 总条数 */
    TotalCounts: number;
    /** 动作历史 */
    ActionHistories: ActionHistory[] | null;
    /** 用于标识查询结果的上下文，翻页用。 */
    Context: string | null;
    /** 搜索结果是否已经结束。 */
    Listover: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceCommLogRequest {
    /** 开始时间 13位时间戳 单位毫秒 */
    MinTime: number;
    /** 结束时间 13位时间戳 单位毫秒 */
    MaxTime: number;
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 返回条数 默认为50 */
    Limit?: number;
    /** 检索上下文 */
    Context?: string;
    /** 类型：shadow 下行，device 上行 默认为空则全部查询 */
    Type?: string;
  }

  interface DescribeDeviceCommLogResponse {
    /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
    Listover: boolean;
    /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
    Context: string;
    /** 日志数据结果数组，返回对应时间点及取值。 */
    Results: DeviceCommLogItem[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceDataHistoryRequest {
    /** 区间开始时间（Unix 时间戳，毫秒级） */
    MinTime: number;
    /** 区间结束时间（Unix 时间戳，毫秒级） */
    MaxTime: number;
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 属性字段名称，对应数据模板中功能属性的标识符 */
    FieldName: string;
    /** 返回条数 */
    Limit?: number[];
    /** 检索上下文 */
    Context?: string;
  }

  interface DescribeDeviceDataHistoryResponse {
    /** 属性字段名称，对应数据模板中功能属性的标识符 */
    FieldName: string | null;
    /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
    Listover: boolean | null;
    /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
    Context: string | null;
    /** 历史数据结果数组，返回对应时间点及取值。 */
    Results: DeviceDataHistoryItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceDataRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
  }

  interface DescribeDeviceDataResponse {
    /** 设备数据 */
    Data: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceEventHistoryRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 搜索的事件类型：alert 表示告警，fault 表示故障，info 表示信息，为空则表示查询上述所有类型事件 */
    Type?: string;
    /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
    StartTime?: number;
    /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
    EndTime?: number;
    /** 搜索上下文, 用作查询游标 */
    Context?: string;
    /** 单次获取的历史数据项目的最大数量, 缺省10 */
    Size?: number;
    /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
    EventId?: string;
  }

  interface DescribeDeviceEventHistoryResponse {
    /** 搜索上下文, 用作查询游标 */
    Context: string | null;
    /** 搜索结果数量 */
    Total: number | null;
    /** 搜索结果是否已经结束 */
    Listover: boolean | null;
    /** 搜集结果集 */
    EventHistory: EventHistoryItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名 */
    DeviceName: string;
  }

  interface DescribeDeviceResponse {
    /** 设备名 */
    DeviceName: string;
    /** 设备是否在线，0不在线，1在线，2获取失败，3未激活 */
    Online: number;
    /** 设备最后上线时间 */
    LoginTime: number;
    /** 设备密钥 */
    DevicePsk: string;
    /** 设备启用状态 */
    EnableState: number;
    /** 设备过期时间 */
    ExpireTime: number;
    /** 设备的sdk日志等级，0：关闭，1：错误，2：告警，3：信息，4：调试 */
    LogLevel: number | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceStatusLogRequest {
    /** 开始时间（毫秒） */
    MinTime: number;
    /** 结束时间（毫秒） */
    MaxTime: number;
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 返回条数 */
    Limit?: number;
    /** 检索上下文 */
    Context?: string;
  }

  interface DescribeDeviceStatusLogResponse {
    /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
    Listover: boolean | null;
    /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
    Context: string | null;
    /** 日志数据结果数组，返回对应时间点及取值。 */
    Results: DeviceStatusLogItem[] | null;
    /** 日志数据结果总条数 */
    TotalCount: number | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDevicesRequest {
    /** 需要查看设备列表的产品 ID */
    ProductId: string;
    /** 偏移量，Offset从0开始 */
    Offset: number;
    /** 分页的大小，最大100 */
    Limit: number;
    /** 需要过滤的设备名称 */
    DeviceName?: string;
  }

  interface DescribeDevicesResponse {
    /** 设备总数 */
    TotalCount: number;
    /** 设备详细信息列表 */
    Devices: DeviceInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFirmwareRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本号 */
    FirmwareVersion: string;
  }

  interface DescribeFirmwareResponse {
    /** 固件版本号 */
    Version: string;
    /** 产品ID */
    ProductId: string;
    /** 固件名称 */
    Name: string | null;
    /** 固件描述 */
    Description: string | null;
    /** 固件Md5值 */
    Md5sum: string | null;
    /** 固件上传的秒级时间戳 */
    Createtime: number | null;
    /** 产品名称 */
    ProductName: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFirmwareTaskDevicesRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本 */
    FirmwareVersion?: string;
    /** 筛选条件 */
    Filters?: SearchKeyword[];
    /** 查询偏移量 默认为0 */
    Offset?: number;
    /** 查询的数量 默认为50 */
    Limit?: number;
  }

  interface DescribeFirmwareTaskDevicesResponse {
    /** 固件升级任务的设备总数 */
    Total: number | null;
    /** 固件升级任务的设备列表 */
    Devices: DeviceUpdateStatus[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFirmwareTaskDistributionRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本号 */
    FirmwareVersion: string;
    /** 固件升级任务ID */
    TaskId: number;
  }

  interface DescribeFirmwareTaskDistributionResponse {
    /** 固件升级任务状态分布信息 */
    StatusInfos: StatusStatistic[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFirmwareTaskRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本号 */
    FirmwareVersion: string;
    /** 固件任务ID */
    TaskId: number;
  }

  interface DescribeFirmwareTaskResponse {
    /** 固件任务ID */
    TaskId: number | null;
    /** 固件任务状态 */
    Status: number | null;
    /** 固件任务创建时间，单位:秒 */
    CreateTime: number | null;
    /** 固件任务升级类型 */
    Type: number | null;
    /** 产品名称 */
    ProductName: string | null;
    /** 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级） */
    UpgradeMode: string | null;
    /** 产品ID */
    ProductId: string | null;
    /** 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回 */
    OriginalVersion: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFirmwareTaskStatisticsRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本号 */
    FirmwareVersion: string;
  }

  interface DescribeFirmwareTaskStatisticsResponse {
    /** 升级成功的设备总数 */
    SuccessTotal: number | null;
    /** 升级失败的设备总数 */
    FailureTotal: number | null;
    /** 正在升级的设备总数 */
    UpgradingTotal: number | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFirmwareTasksRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本号 */
    FirmwareVersion: string;
    /** 查询偏移量 */
    Offset: number;
    /** 返回查询结果条数 */
    Limit: number;
    /** 搜索过滤条件 */
    Filters?: SearchKeyword[];
  }

  interface DescribeFirmwareTasksResponse {
    /** 固件升级任务列表 */
    TaskInfos: FirmwareTaskInfo[] | null;
    /** 固件升级任务总数 */
    Total: number | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeForwardRuleRequest {
    /** 产品ID */
    ProductID: string;
    /** 控制台Skey */
    Skey: string;
    /** 队列类型，0：CMQ，1：Ckafka */
    QueueType: number;
    /** 临时密钥 */
    Consecretid?: string;
  }

  interface DescribeForwardRuleResponse {
    /** 腾讯云账号 */
    Endpoint: string;
    /** 队列名称 */
    QueueName: string;
    /** 产品ID */
    ProductID: string;
    /** 消息类型 1设备上报信息 2设备状态变化通知 3为全选 */
    MsgType: number;
    /** 结果 2表示禁用 其他为成功 */
    Result: number;
    /** 角色名 */
    RoleName: string;
    /** 角色ID */
    RoleID: number;
    /** 队列区域 */
    QueueRegion: string;
    /** 队列类型，0：CMQ，1：Ckafka */
    QueueType: number;
    /** 实例id， 目前只有Ckafaka会用到 */
    InstanceId: string;
    /** 实例名称，目前只有Ckafaka会用到 */
    InstanceName: string;
    /** 错误消息 */
    ErrMsg: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeModelDefinitionRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DescribeModelDefinitionResponse {
    /** 产品数据模板 */
    Model: ProductModelDefinition;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeProductDynamicRegisterRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DescribeProductDynamicRegisterResponse {
    /** 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备 */
    RegisterType: number;
    /** 动态注册产品密钥 */
    ProductSecret: string;
    /** 动态注册设备上限 */
    RegisterLimit: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeProductRequest {
    /** 产品id */
    ProductId: string;
  }

  interface DescribeProductResponse {
    /** 产品详情 */
    Data: VideoProduct;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeProductsRequest {
    /** 分页的大小，最大100 */
    Limit: number;
    /** 偏移量，Offset从0开始 */
    Offset: number;
  }

  interface DescribeProductsResponse {
    /** 总数 */
    TotalCount: number;
    /** 产品详情列表 */
    Data: VideoProduct[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeSDKLogRequest {
    /** 日志开始时间 */
    MinTime: number;
    /** 日志结束时间 */
    MaxTime: number;
    /** 查询关键字，可以同时支持键值查询和文本查询，例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。键值或文本可以包含多个，以空格隔开。其中可以索引的key包括：productid、devicename、loglevel一个典型的查询示例：productid:7JK1G72JNE devicename:name publish loglevel:WARN一个典型的查询示例：productid:ABCDE12345 devicename:test scene:SHADOW publish */
    Keywords: string;
    /** 日志检索上下文 */
    Context?: string;
    /** 查询条数 */
    MaxNum?: number;
  }

  interface DescribeSDKLogResponse {
    /** 日志检索上下文 */
    Context: string;
    /** 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context */
    Listover: boolean;
    /** 日志列表 */
    Results: SDKLogItem[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface EditFirmwareRequest {
    /** 产品ID。 */
    ProductID: string;
    /** 固件版本号。 */
    FirmwareVersion: string;
    /** 固件名称。 */
    FirmwareName: string;
    /** 固件描述。 */
    FirmwareDescription?: string;
  }

  interface EditFirmwareResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GenerateSignedVideoURLRequest {
    /** 视频播放原始URL地址 */
    VideoURL: string;
    /** 播放链接过期时间 */
    ExpireTime: number;
  }

  interface GenerateSignedVideoURLResponse {
    /** 视频防盗链播放URL */
    SignedVideoURL: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetAllFirmwareVersionRequest {
    /** 产品ID */
    ProductID: string;
  }

  interface GetAllFirmwareVersionResponse {
    /** 固件可用版本列表 */
    Version: string[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetFirmwareURLRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本 */
    FirmwareVersion: string;
  }

  interface GetFirmwareURLResponse {
    /** 固件URL */
    Url: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ImportModelDefinitionRequest {
    /** 产品ID */
    ProductId: string;
    /** 数据模板定义 */
    ModelSchema: string;
  }

  interface ImportModelDefinitionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface InheritCloudStorageUserRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 原始用户ID */
    UserId: string;
    /** 目标用户ID */
    ToUserId: string;
  }

  interface InheritCloudStorageUserResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListFirmwaresRequest {
    /** 获取的页数 */
    PageNum: number;
    /** 分页的大小 */
    PageSize: number;
    /** 产品ID */
    ProductID?: string;
    /** 搜索过滤条件 */
    Filters?: SearchKeyword[];
  }

  interface ListFirmwaresResponse {
    /** 固件总数 */
    TotalCount: number;
    /** 固件列表 */
    Firmwares: FirmwareInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDataForwardRequest {
    /** 产品ID。 */
    ProductId: string;
    /** 转发地址。如果有鉴权Token，则需要自行传入，例如 [{\"forward\":{\"api\":\"http://123.207.117.108:1080/sub.php\",\"token\":\"testtoken\"}}] */
    ForwardAddr: string;
    /** 1-数据信息转发 2-设备上下线状态转发 3-数据信息转发&设备上下线状态转发 */
    DataChose?: number;
  }

  interface ModifyDataForwardResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDataForwardStatusRequest {
    /** 产品ID。 */
    ProductId: string;
    /** 转发状态，1启用，0禁用。 */
    Status: number;
  }

  interface ModifyDataForwardStatusResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDeviceLogLevelRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 日志级别，0：关闭，1：错误，2：告警，3：信息，4：调试 */
    LogLevel: number;
  }

  interface ModifyDeviceLogLevelResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDeviceRequest {
    /** 设备所属产品id */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 要设置的设备状态，1为启用，0为禁用 */
    EnableState?: number;
  }

  interface ModifyDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyForwardRuleRequest {
    /** 产品ID */
    ProductID: string;
    /** 消息类型 */
    MsgType: number;
    /** 控制台Skey */
    Skey: string;
    /** 队列区域 */
    QueueRegion: string;
    /** 队列类型 0.CMQ 1.CKafka */
    QueueType: number;
    /** 临时密钥 */
    Consecretid?: string;
    /** 实例ID */
    InstanceId?: string;
    /** 实例名称 */
    InstanceName?: string;
    /** 队列或主题ID */
    QueueID?: string;
    /** 队列或主题名称 */
    QueueName?: string;
  }

  interface ModifyForwardRuleResponse {
    /** 腾讯云账号 */
    Endpoint: string;
    /** 产品ID */
    ProductID: string;
    /** 结果 */
    Result: number;
    /** 错误信息 */
    ErrMsg: string;
    /** 队列类型 0.CMQ 1.CKafka */
    QueueType: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyModelDefinitionRequest {
    /** 产品ID */
    ProductId: string;
    /** 数据模板定义 */
    ModelSchema: string;
  }

  interface ModifyModelDefinitionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyProductDynamicRegisterRequest {
    /** 产品ID */
    ProductId: string;
    /** 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备 */
    RegisterType: number;
    /** 动态注册设备上限 */
    RegisterLimit: number;
  }

  interface ModifyProductDynamicRegisterResponse {
    /** 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备 */
    RegisterType: number;
    /** 动态注册产品密钥 */
    ProductSecret: string;
    /** 动态注册设备上限 */
    RegisterLimit: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyProductRequest {
    /** 产品id */
    ProductId: string;
    /** 修改的产品名称 （支持中文、英文、数字、下划线组合，最多不超过20个字符） */
    ProductName?: string;
    /** 修改的产品描述 （最多不超过128个字符） */
    ProductDescription?: string;
  }

  interface ModifyProductResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface PublishMessageRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 消息发往的主题 */
    Topic: string;
    /** 云端下发到设备的控制报文 */
    Payload: string;
    /** 消息服务质量等级，取值为0或1 */
    Qos?: number;
    /** Payload的内容编码格式，取值为base64或空。base64表示云端将接收到的base64编码后的报文再转换成二进制报文下发至设备，为空表示不作转换，透传下发至设备 */
    PayloadEncoding?: string;
  }

  interface PublishMessageResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ReportAliveDeviceRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
  }

  interface ReportAliveDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ResetCloudStorageRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
    /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
    ChannelId?: number;
    /** 云存用户Id，为空则为默认云存空间。 */
    UserId?: string;
  }

  interface ResetCloudStorageResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RetryDeviceFirmwareTaskRequest {
    /** 产品ID */
    ProductID: string;
    /** 设备名称 */
    DeviceName: string;
    /** 固件版本号 */
    FirmwareVersion: string;
    /** 固件升级任务ID */
    TaskId: number;
  }

  interface RetryDeviceFirmwareTaskResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SetForwardAuthRequest {
    /** 控制台Skey */
    Skey: string;
    /** 消息队列类型 0.CMQ 1.CKafka */
    QueueType: number;
  }

  interface SetForwardAuthResponse {
    /** 腾讯云账号 */
    Endpoint: string;
    /** 结果 */
    Result: number;
    /** 角色名 */
    RoleName: string;
    /** 角色ID */
    RoleID: number;
    /** 消息队列类型 0.CMQ 1.CKafka */
    QueueType: number;
    /** 错误消息 */
    ErrMsg: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface TransferCloudStorageRequest {
    /** 产品ID */
    ProductId: string;
    /** 已开通云存的设备名称 */
    DeviceName: string;
    /** 未开通云存的设备名称 */
    ToDeviceName: string;
  }

  interface TransferCloudStorageResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UpdateAIModelChannelRequest {
    /** 模型ID */
    ModelId: string;
    /** 产品ID */
    ProductId: string;
    /** 推送类型。ckafka：消息队列；forward：http/https推送 */
    Type: string;
    /** 第三方推送地址 */
    ForwardAddress?: string;
    /** 第三方推送密钥，不填写则腾讯云自动生成。 */
    ForwardKey?: string;
    /** ckafka地域 */
    CKafkaRegion?: string;
    /** ckafka实例 */
    CKafkaInstance?: string;
    /** ckafka订阅主题 */
    CKafkaTopic?: string;
  }

  interface UpdateAIModelChannelResponse {
    /** 第三方推送密钥，如果选择自动生成则会返回此字段 */
    ForwardKey: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UploadFirmwareRequest {
    /** 产品ID */
    ProductID: string;
    /** 固件版本号 */
    FirmwareVersion: string;
    /** 固件的MD5值 */
    Md5sum: string;
    /** 固件的大小 */
    FileSize: number;
    /** 固件名称 */
    FirmwareName?: string;
    /** 固件描述 */
    FirmwareDescription?: string;
  }

  interface UploadFirmwareResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface WakeUpDeviceRequest {
    /** 产品ID */
    ProductId: string;
    /** 设备名称 */
    DeviceName: string;
  }

  interface WakeUpDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

declare namespace V20191126 {
  interface VersionHeader { headers: { 'X-TC-Version': '2019-11-26' } }

  /** 终端用户绑定的设备 */
  interface BindDevInfo {
    /** 设备TID */
    Tid: string;
    /** 设备名称 */
    DeviceName: string;
    /** 设备型号 */
    DeviceModel: string | null;
    /** 用户角色，owner：主人，guest：访客 */
    Role: string;
  }

  /** 设备绑定的终端用户 */
  interface BindUsrInfo {
    /** IotVideo平台分配给终端用户的用户id */
    AccessId: string;
    /** 用户角色，owner：主人，guest：访客 */
    Role: string;
  }

  /** 版本发布的描述信息，需要国际化，可以为空 */
  interface Contents {
    /** 英文，长度不超过300个字符 */
    En?: string | null;
    /** 中文简体，长度不超过300个字符 */
    Cn?: string | null;
    /** 中文繁体(Traditional Chinese)，长度不超过300个字符 */
    Tc?: string | null;
    /** 默认语言，最多不超过300个字符 */
    Default?: string | null;
  }

  /** 接口DescribeStream输出参数 */
  interface Data {
    /** 直播协议 */
    Protocol: string | null;
    /** 流媒体播放地址 */
    URI: string | null;
    /** 流媒体地址过期时间 */
    ExpireTime: number | null;
    /** 视频编码 */
    VideoCodec: string | null;
    /** 音频编码 */
    AudioCodec: string | null;
  }

  /** 用于终端用户临时访问设备的token授权信息 */
  interface DevTokenInfo {
    /** 客户的终端用户在IotVideo上的唯一标识id */
    AccessId: string;
    /** 设备TID */
    Tid: string;
    /** IotVideo平台的accessToken */
    AccessToken: string;
    /** Token的过期时间，单位秒(UTC时间) */
    ExpireTime: number;
  }

  /** 设备证书及密钥 */
  interface DeviceCertificate {
    /** 设备TID */
    Tid: string;
    /** 设备初始证书信息，base64编码 */
    Certificate: string;
    /** 设备私钥下载地址 */
    WhiteBoxSoUrl: string;
  }

  /** 设备信息 */
  interface DeviceData {
    /** 设备TID */
    Tid: string | null;
    /** 激活时间 0代表未激活 */
    ActiveTime: number | null;
    /** 设备是否被禁用 */
    Disabled: boolean | null;
    /** 固件版本 */
    OtaVersion: string | null;
    /** 设备在线状态 */
    Online: number | null;
    /** 设备最后上线时间（mqtt连接成功时间），UNIX时间戳，单位秒 */
    LastOnlineTime: number | null;
    /** 物模型json数据 */
    IotModel: string | null;
    /** 设备名称 */
    DeviceName: string | null;
    /** 产品ID */
    ProductId: string | null;
    /** 设备初始证书信息，base64编码 */
    Certificate: string | null;
    /** 设备私钥下载地址 */
    WhiteBoxSoUrl: string | null;
    /** 设备推流状态 */
    StreamStatus: boolean | null;
  }

  /** 设备物模型数据 */
  interface DeviceModelData {
    /** 设备TID */
    Tid: string;
    /** 物模型分支路径 */
    Branch: string | null;
    /** 物模型数据 */
    IotModel: string | null;
  }

  /** 设备列表元素所包含的设备基本信息 */
  interface DevicesData {
    /** 设备TID */
    Tid: string;
    /** 设备名称 */
    DeviceName: string;
    /** 激活时间 0代表未激活 */
    ActiveTime: number;
    /** 设备是否被禁用 */
    Disabled: boolean;
    /** 设备推流状态 */
    StreamStatus: boolean;
    /** 固件版本 */
    OtaVersion: string;
    /** 设备在线状态 */
    Online: number;
    /** 设备最后上线时间（mqtt连接成功时间），UNIX时间戳，单位秒 */
    LastOnlineTime: number;
    /** 物模型json数据 */
    IotModel: string;
    /** 设备固件最新更新时间，UNIX时间戳，单位秒 */
    LastUpdateTime: number;
  }

  /** 物模型历史版本 */
  interface IotModelData {
    /** 版本号 */
    Revision: number;
    /** 发布时间 */
    ReleaseTime: number;
  }

  /** 设备日志信息 */
  interface LogData {
    /** 发生时间 UNIX时间戳，单位秒 */
    Occurtime: number;
    /** 日志类型 1在线状态变更 2FP变更 3SP变更 4CO控制 5ST变更 6EV事件 */
    LogType: number;
    /** 物模型对象索引 */
    DataObject: string | null;
    /** 物模型旧值 json串 */
    OldValue: string | null;
    /** 物模型新值 json串 */
    NewValue: string | null;
  }

  /** 产品转发消息队列配置 */
  interface MsgQueueData {
    /** 消息队列类型 1：CMQ 2：kafka */
    MsgQueueType: number;
    /** 消息类型列表，整型值（0-31）之间以“,”分隔 */
    MsgType: string;
    /** 主题名称 */
    Topic: string;
    /** 实例名称 */
    Instance: string;
    /** 消息地域 */
    MsgRegion: string;
  }

  /** 操作系统信息 */
  interface OsData {
    /** 芯片型号 */
    ChipId: string | null;
    /** 芯片厂商 */
    ChipManufacture: string | null;
  }

  /** 产品发布过的全部版本 */
  interface OtaPubHistory {
    /** 版本名称 */
    OtaVersion: string;
    /** 发布时间，unix时间戳，单位：秒 */
    PublishTime: number;
  }

  /** 产品信息摘要 */
  interface ProductBase {
    /** 产品ID */
    ProductId: string;
    /** 产器型号(APP产品,为APP包名) */
    ProductModel: string;
    /** 产品名称 */
    ProductName: string;
    /** 产品描述信息 */
    ProductDescription: string;
    /** 创建时间，UNIX 时间戳，单位秒 */
    CreateTime: number;
    /** 物模型发布版本号,0代表物模型尚未发布 */
    IotModelRevision: number;
    /** 产品密钥 */
    SecretKey: string;
    /** 设备功能码ypsxth : 音频双向通话;	spdxth : 视频单向通话(监控);NVR0824 : NVR设备,大于8路，小于等于24路;WifiKeepalive : Wifi保活(低功耗产品);Alexa : Alexa接入;Google : Google接入; */
    FuncCode: string[] | null;
    /** 产品类别，0 : 普通视频设备；1 : NVR设备 */
    ProductCate: number | null;
    /** 产品地域China-Mainland（中国大陆）China-Hong Kong, Macao and Taiwan（港澳台地区）America（美国）Europe（欧洲）India（印度）Other-Overseas（其他境外地区） */
    ProductRegion: string | null;
  }

  /** 产品信息 */
  interface ProductData {
    /** 产品ID */
    ProductId: string | null;
    /** 产品名称 */
    ProductName: string | null;
    /** 产品描述信息 */
    ProductDescription: string | null;
    /** 创建时间，UNIX 时间戳，单位秒 */
    CreateTime: number | null;
    /** 物模型发布版本号,0代表物模型尚未发布 */
    IotModelRevision: number | null;
    /** 产品密钥 */
    SecretKey: string | null;
    /** 设备功能码 */
    Features: string[] | null;
    /** 产器型号(APP产品,为APP包名) */
    ProductModel: string | null;
    /** 主芯片厂商id */
    ChipManufactureId: string | null;
    /** 主芯片型号 */
    ChipId: string | null;
    /** 产品类别，0：普通视频设备；1：NVR设备 */
    ProductCate: number | null;
    /** 产品地区China-Mainland（中国大陆）China-Hong Kong, Macao and Taiwan（港澳台地区）America（美国）Europe（欧洲）India（印度）Other-Overseas（其他境外地区） */
    ProductRegion: string | null;
    /** 接入模型，bit0是0：公版小程序未接入，bit0是1：公版小程序已接入 */
    AccessMode: number | null;
    /** linux,android,liteos */
    Os: string | null;
  }

  /** 充值记录列表 */
  interface RechargeRecord {
    /** 流水记录号。 */
    WaterId: number | null;
    /** 充值前的余额，单位0.01元。 */
    BalanceBeforeRecharge: number | null;
    /** 充值金额，单位0.01元。 */
    Money: number | null;
    /** 充值时间, UTC值。 */
    OperateTime: number | null;
  }

  /** 终端用户注册状态 */
  interface RegisteredStatus {
    /** 终端用户的唯一ID */
    CunionId: string;
    /** 注册状态 */
    IsRegisted: boolean;
  }

  /** 云存订单信息 */
  interface StorageOrder {
    /** 定单唯一性ID */
    OrderId: string;
    /** 云存套餐ID */
    PkgId: string;
    /** 定单服务状态1;订单正在使用。2:订单未开始。3:订单已经使用过，现在暂时未开始使用(该订单从其他服务转移而来)。4:订单已过期。5:订单已被退订。6:定单已被转移到其他云存服务。 */
    Status: number;
    /** 定单服务生效时间 */
    StartTime: number;
    /** 定单服务失效时间 */
    EndTime: number;
  }

  /** 系统类型 */
  interface SystemType {
    /** 安卓系统 */
    Android: OsData[] | null;
    /** linux系统 */
    Linux: OsData[] | null;
    /** LiteOs系统 */
    LiteOs: OsData[] | null;
  }

  /** 布尔值，标识指定设备是否在白名单中 */
  interface TraceStatus {
    /** 设备TID */
    Tid: string;
    /** 设备追踪状态 */
    IsExist: boolean;
  }

  /** 固件版本详细信息 */
  interface VersionData {
    /** 产品ID */
    ProductId: string | null;
    /** 固件版本号 */
    OtaVersion: string | null;
    /** 版本类型 1未发布 2测试发布 3正式发布 4禁用 */
    PubStatus: number | null;
    /** 固件版本存储路径URL */
    VersionUrl: string | null;
    /** 文件大小，byte */
    FileSize: number | null;
    /** 文件校验码 */
    Md5: string | null;
    /** 指定的允许升级的旧版本，PubStatus=3时有效 */
    OldVersions: string | null;
    /** 指定的允许升级的旧设备id，PubStatus=2时有效 */
    Tids: string | null;
    /** 灰度值（0-100）,PubStatus=3时有效，表示n%的升级总量 */
    GrayValue: number | null;
    /** 最近一次发布时间，UNIX时间戳，单位秒 */
    PublishTime: number | null;
    /** 此版本激活的设备总数 */
    ActiveCount: number | null;
    /** 此版本在线的设备总数 */
    OnlineCount: number | null;
    /** 上传固件文件的时间，UNIX时间戳，单位秒 */
    UpdateTime: number | null;
    /** 发布记录的最后变更时间，UNIX时间戳，单位秒 */
    UploadTime: number | null;
    /** 该固件版本发布的变更次数 */
    ModifyTimes: number | null;
    /** 备注信息 */
    Remark: string | null;
    /** 版本发布的描述信息，需要国际化，可以为空 */
    Contents: Contents | null;
    /** 月活设备数，当月第一天开始有上线的设备数量。 */
    AliveInMonthCnt: number | null;
  }

  interface ClearDeviceActiveCodeRequest {
    /** 设备TID列表，0<元素数量<=100 */
    Tids: string[];
  }

  interface ClearDeviceActiveCodeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateAnonymousAccessTokenRequest {
    /** Token的TTL(time to alive)分钟数,最大值1440(即24小时) */
    TtlMinutes: number;
    /** 设备ID。创建Token时, 此参数为必须项 */
    Tid?: string;
    /** 旧的AccessToken。续期Token时，此参数为必须 */
    OldAccessToken?: string;
  }

  interface CreateAnonymousAccessTokenResponse {
    /** 终端用户在IoT Video上的唯一标识ID */
    AccessId?: string;
    /** IoT Video平台的AccessToken */
    AccessToken?: string;
    /** Token的过期时间，单位秒(UTC时间) */
    ExpireTime?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateAppUsrRequest {
    /** 标识用户的唯一ID，防止同一个用户多次注册 */
    CunionId: string;
    /** 用于小程序关联手机号 */
    Mobile?: string;
  }

  interface CreateAppUsrResponse {
    /** 厂商云标识用户的唯一ID */
    CunionId?: string;
    /** 客户的终端用户在IoT Video上的唯一标识ID */
    AccessId?: string;
    /** 用户是否为新创建 */
    NewRegist?: boolean;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateBindingRequest {
    /** 终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
    /** 设备TID */
    Tid: string;
    /** 用户角色，owner：主人，guest：访客 */
    Role: string;
    /** 是否踢掉之前的主人，true：踢掉；false：不踢掉。当role为guest时，可以不填 */
    ForceBind?: boolean;
    /** 设备昵称，最多不超过64个字符 */
    Nick?: string;
    /** 绑定过程中的会话token，由设备通过SDK接口确认是否允许绑定的token，用于增加设备被绑定的安全性 */
    BindToken?: string;
  }

  interface CreateBindingResponse {
    /** 访问设备的AccessToken */
    AccessToken: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateDevTokenRequest {
    /** 客户的终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
    /** 设备TID列表,0<元素数量<=100 */
    Tids: string[];
    /** Token的TTL(time to alive)分钟数 */
    TtlMinutes: number;
  }

  interface CreateDevTokenResponse {
    /** 返回的用户token列表 */
    Data?: DevTokenInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateDevicesRequest {
    /** 产品ID */
    ProductId: string;
    /** 创建设备的数量，数量范围1-100 */
    Number: number;
    /** 设备名称前缀，支持英文、数字，不超过10字符 */
    NamePrefix?: string;
    /** 操作人 */
    Operator?: string;
  }

  interface CreateDevicesResponse {
    /** 新创建设备的认证信息 */
    Data?: DeviceCertificate[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateGencodeRequest {
    /** 产品ID */
    ProductId: string;
    /** 物模型发布版本号,-1代表未发布的，保存的是草稿箱的版本。1代表已发布的物模型。 */
    Revision: number;
  }

  interface CreateGencodeResponse {
    /** 生成的源代码(zip压缩后的base64编码) */
    ZipCode?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateIotDataTypeRequest {
    /** 用户自定义数据类型，json格式的字符串 */
    IotDataType: string;
  }

  interface CreateIotDataTypeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateIotModelRequest {
    /** 产品ID */
    ProductId: string;
    /** 物模型json串 */
    IotModel: string;
  }

  interface CreateIotModelResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateProductRequest {
    /** 产器型号(APP产品,为APP包名) */
    ProductModel: string;
    /** 产品名称仅支持中文、英文、数字、下划线，不超过32个字符 */
    ProductName: string;
    /** 产品描述信息不支持单引号、双引号、退格符、回车符、换行符、制表符、反斜杠、下划线、“%”、“#”、“$”，不超过128字符 */
    ProductDescription: string;
    /** 设备功能码（ypsxth:音频双向通话 ，spdxth:视频单向通话） */
    Features?: string[];
    /** 主芯片产商ID */
    ChipManufactureId?: string;
    /** 主芯片ID */
    ChipId?: string;
    /** 地域：China-Mainland（中国大陆）China-Hong Kong, Macao and Taiwan（港澳台地区）America（美国）Europe（欧洲）India（印度）Other-Overseas（其他境外地区） */
    ProductRegion?: string;
    /** 设备类型, 0-普通视频设备，1-NVR设备 */
    ProductCate?: number;
    /** 接入模型，bit0是0：公版小程序未接入，bit0是1：公版小程序已接入 */
    AccessMode?: number;
    /** Linux,Android,Liteos等系统 */
    Os?: string;
    /** 芯片架构，只是针对操作系统为android的 */
    ChipArch?: string;
  }

  interface CreateProductResponse {
    /** 产品详细信息 */
    Data?: ProductBase;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateStorageRequest {
    /** 云存套餐ID */
    PkgId: string;
    /** 设备TID */
    Tid: string;
    /** 用户唯一标识，由厂商保证内部唯一性 */
    UserTag: string;
  }

  interface CreateStorageResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateStorageServiceRequest {
    /** 云存套餐ID：yc1m3d ： 全时3天存储月套餐。yc1m7d ： 全时7天存储月套餐。yc1m30d ：全时30天存储月套餐。yc1y3d ：全时3天存储年套餐。yc1y7d ：全时7天存储年套餐。yc1y30d ：全时30天存储年套餐。ye1m3d ：事件3天存储月套餐。ye1m7d ：事件7天存储月套餐。ye1m30d ：事件30天存储月套餐 。ye1y3d ：事件3天存储年套餐。ye1y7d ：事件7天存储年套餐。ye1y30d ：事件30天存储年套餐。yc1w7d : 全时7天存储周套餐。ye1w7d : 事件7天存储周套餐。 */
    PkgId: string;
    /** 设备TID */
    Tid: string;
    /** 订单数量,可一次性创建多个订单 */
    OrderCount: number;
    /** 云存服务所在的区域,如ap-guangzhou,ap-singapore, na-siliconvalley, eu-frankfurt */
    StorageRegion: string;
    /** 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应) */
    ChnNum?: number;
    /** 设备主人用户在IoT Video平台的注册ID。该参数用于验证Paas/Saas平台的设备/用户关系链是否一致 */
    AccessId?: string;
    /** 服务生效时间,若不指定此参数，服务立即生效 */
    EnableTime?: number;
  }

  interface CreateStorageServiceResponse {
    /** 标志是否为续订 */
    IsRenew: boolean;
    /** 云存服务ID */
    ServiceId: string;
    /** 云存服务所在的区域 */
    StorageRegion: string;
    /** 设备TID */
    Tid: string;
    /** 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应) */
    ChnNum: number;
    /** 终端用户在IoT Video平台的注册ID */
    AccessId: string;
    /** 服务开始时间 */
    StartTime: number;
    /** 服务失效时间 */
    EndTime: number;
    /** 服务状态1：正常使用中2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。3：已过期。查询不到设备保存在云端的数据。4：等待服务生效。 */
    Status: number;
    /** 新增的云存定单列表 */
    Data: StorageOrder[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateTraceIdsRequest {
    /** 设备TID列表 */
    Tids: string[];
  }

  interface CreateTraceIdsResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateUploadPathRequest {
    /** 产品ID */
    ProductId: string;
    /** 固件文件名 */
    FileName: string;
  }

  interface CreateUploadPathResponse {
    /** 固件上传地址URL，用户可将本地的固件文件通过该URL以PUT的请求方式上传。 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateUsrTokenRequest {
    /** 终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
    /** 终端唯一ID，用于区分同一个用户的多个终端 */
    UniqueId: string;
    /** Token的TTL(time to alive)分钟数 */
    TtlMinutes: number;
    /** 旧的AccessToken。续期Token时，此参数为必须。 */
    OldAccessToken?: string;
  }

  interface CreateUsrTokenResponse {
    /** 终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
    /** IoT Video平台的AccessToken */
    AccessToken: string;
    /** Token的过期时间，单位秒(UTC时间) */
    ExpireTime: number;
    /** 终端ID */
    TerminalId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteAppUsrRequest {
    /** 客户的终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
  }

  interface DeleteAppUsrResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteBindingRequest {
    /** 终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
    /** 设备TID */
    Tid: string;
    /** 用户角色，owner：主人，guest：访客 */
    Role: string;
  }

  interface DeleteBindingResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteDeviceRequest {
    /** 设备TID列表 */
    Tids: string[];
  }

  interface DeleteDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteIotDataTypeRequest {
    /** 自定义数据类型的标识符 */
    TypeId: string;
  }

  interface DeleteIotDataTypeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteMessageQueueRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DeleteMessageQueueResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteOtaVersionRequest {
    /** 产品ID */
    ProductId: string;
    /** 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288 */
    OtaVersion: string;
    /** 操作人 */
    Operator?: string;
  }

  interface DeleteOtaVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteProductRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DeleteProductResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteTraceIdsRequest {
    /** 设备TID列表 */
    Tids: string[];
  }

  interface DeleteTraceIdsResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeliverStorageServiceRequest {
    /** 待转移的源云存服务ID */
    SrcServiceId: string;
    /** 设备TID */
    Tid: string;
    /** 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应) */
    ChnNum?: number;
    /** 设备主人用户在IoT Video平台的注册ID。该参数用于验证Paas/Saas平台的设备/用户关系链是否一致 */
    AccessId?: string;
  }

  interface DeliverStorageServiceResponse {
    /** 被转出的云存服务ID */
    SrcServiceId: string;
    /** 被转入的云存服务ID */
    ServiceId: string;
    /** 云存服务所在的区域 */
    StorageRegion: string;
    /** 设备TID */
    Tid: string;
    /** 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应) */
    ChnNum: number;
    /** 终端用户在IoT Video平台的注册ID */
    AccessId: string;
    /** 服务开始时间 */
    StartTime: number;
    /** 服务失效时间 */
    EndTime: number;
    /** 服务状态1：正常使用中2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。3：已过期。查询不到设备保存在云端的数据。4：等待服务生效。 */
    Status: number;
    /** 新增的云存定单列表 */
    Data: StorageOrder[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeAccountBalanceRequest {
    /** 账户类型 1:设备接入 2:云存 */
    AccountType: number;
  }

  interface DescribeAccountBalanceResponse {
    /** 账户类型 1=设备接入;2=云存。 */
    AccountType?: number | null;
    /** 余额, 单位 : 分(人民币)。 */
    Balance?: number | null;
    /** 账户状态，1=正常；8=冻结；9=销户。 */
    State?: number | null;
    /** 最后修改时间，UTC值。 */
    LastUpdateTime?: number | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeBindDevRequest {
    /** 终端用户在IoT Video上的唯一标识ID */
    AccessId: string;
  }

  interface DescribeBindDevResponse {
    /** 绑定的设备列表信息 */
    Data?: BindDevInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeBindUsrRequest {
    /** 设备TID */
    Tid: string;
    /** 设备主人的AccessId */
    AccessId?: string;
  }

  interface DescribeBindUsrResponse {
    /** 具有绑定关系的终端用户信息列表 */
    Data?: BindUsrInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceModelRequest {
    /** 设备TID */
    Tid: string;
    /** 物模型的分支路径 */
    Branch?: string;
  }

  interface DescribeDeviceModelResponse {
    /** 设备物模型信息 */
    Data?: DeviceModelData | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDeviceRequest {
    /** 设备TID */
    Tid: string;
  }

  interface DescribeDeviceResponse {
    /** 设备信息 */
    Data?: DeviceData | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeDevicesRequest {
    /** 产品ID */
    ProductId: string;
    /** 是否返回全量数据当该值为false时，返回值中的设备物模型、固件版本、在线状态、最后在线时间字段等字段，都将返回数据类型的零值。 */
    ReturnModel: boolean;
    /** 分页数量,0<取值范围<=100 */
    Limit: number;
    /** 分页偏移，取值＞0 */
    Offset: number;
    /** 指定固件版本号，为空查询此产品下所有设备 */
    OtaVersion?: string;
    /** 设备名称，支持左前缀模糊匹配 */
    DeviceName?: string;
  }

  interface DescribeDevicesResponse {
    /** 设备信息 列表 */
    Data?: DevicesData[] | null;
    /** 设备总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeIotDataTypeRequest {
    /** 自定义数据类型的标识符，为空则返回全量自定义类型的列表 */
    TypeId?: string;
  }

  interface DescribeIotDataTypeResponse {
    /** 自定义数据类型，json格式的字符串 */
    Data?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeIotModelRequest {
    /** 产品ID */
    ProductId: string;
    /** 物模型版本号， -1表示最新编辑的（未发布） */
    Revision: number;
  }

  interface DescribeIotModelResponse {
    /** 物模型定义，json格式的字符串 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeIotModelsRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DescribeIotModelsResponse {
    /** 历史版本列表 */
    Data?: IotModelData[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeLogsRequest {
    /** 设备TID */
    Tid: string;
    /** 当前分页的最大条数,0<取值范围<=100 */
    Limit: number;
    /** 分页偏移量,取值范围>0 */
    Offset: number;
    /** 日志类型 1.在线状态变更 2.ProConst变更 3.ProWritable变更 4.Action控制 5.ProReadonly变更 6.Event事件 */
    LogType?: number;
    /** 查询的起始时间 UNIX时间戳，单位秒 */
    StartTime?: number;
    /** 物模型对象索引，用于模糊查询，字符长度<=255，每层节点的字符长度<=16 */
    DataObject?: string;
    /** 查询的结束时间 UNIX时间戳，单位秒 */
    EndTime?: number;
  }

  interface DescribeLogsResponse {
    /** 设备日志信息 */
    Data?: LogData[] | null;
    /** Data数组所包含的信息条数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeMessageQueueRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DescribeMessageQueueResponse {
    /** 消息队列配置 */
    Data?: MsgQueueData | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeModelDataRetRequest {
    /** 任务ID */
    TaskId: string;
  }

  interface DescribeModelDataRetResponse {
    /** 设备响应结果 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeOsListRequest {
  }

  interface DescribeOsListResponse {
    /** 系统类型 */
    Data?: SystemType | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeOtaVersionsRequest {
    /** 分页偏移量 */
    Offset: number;
    /** 每页数量，0<取值范围<=100 */
    Limit: number;
    /** 产品ID，为空时查询客户所有产品的版本信息 */
    ProductId?: string;
    /** 版本号，支持模糊匹配 */
    OtaVersion?: string;
    /** 版本类型 1未发布 2测试发布 3正式发布 4禁用 */
    PubStatus?: number;
  }

  interface DescribeOtaVersionsResponse {
    /** 版本数量 */
    TotalCount?: number;
    /** 版本详细信息 */
    Data?: VersionData[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeProductRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DescribeProductResponse {
    /** 产品详情 */
    Data?: ProductData | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeProductsRequest {
    /** 分页大小，当前页面中显示的最大数量，值范围 1-100 */
    Limit: number;
    /** 分页偏移，Offset从0开始 */
    Offset: number;
    /** 产器型号(APP产品,为APP包名) */
    ProductModel?: string;
    /** 开始时间 ，UNIX 时间戳，单位秒 */
    StartTime?: number;
    /** 结束时间 ，UNIX 时间戳，单位秒 */
    EndTime?: number;
  }

  interface DescribeProductsResponse {
    /** 产品详细信息列表 */
    Data?: ProductData[] | null;
    /** 产品总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribePubVersionsRequest {
    /** 产品ID */
    ProductId: string;
  }

  interface DescribePubVersionsResponse {
    /** 历史发布的版本列表 */
    Data?: OtaPubHistory[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeRechargeRecordsRequest {
    /** 账户类型 1:设备接入 2:云存。 */
    AccountType: number;
    /** 从第几条记录开始显示, 默认值为0。 */
    Offset?: number;
    /** 总共查询多少条记录，默认为值50。 */
    Limit?: number;
  }

  interface DescribeRechargeRecordsResponse {
    /** 账户类型 1:设备接入 2:云存 */
    AccountType?: number | null;
    /** 充值记录列表 */
    Records?: RechargeRecord[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeRegistrationStatusRequest {
    /** 终端用户的唯一ID列表，0<元素数量<=100 */
    CunionIds: string[];
  }

  interface DescribeRegistrationStatusResponse {
    /** 终端用户注册状态列表 */
    Data?: RegisteredStatus[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeRunLogRequest {
    /** 设备TID */
    Tid: string;
  }

  interface DescribeRunLogResponse {
    /** 设备运行日志文本信息 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeStorageServiceRequest {
    /** 云存服务ID */
    ServiceId: string;
    /** 是否返回已结束的订单信息(已过期/已退订/已转移) */
    GetFinishedOrder?: boolean;
  }

  interface DescribeStorageServiceResponse {
    /** 云存服务ID */
    ServiceId: string;
    /** 云存服务所在的区域 */
    StorageRegion: string;
    /** 设备TID */
    Tid: string;
    /** 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应) */
    ChnNum: number;
    /** 终端用户在IoT Video平台的注册ID */
    AccessId: string;
    /** 服务开始时间 */
    StartTime: number;
    /** 服务失效时间 */
    EndTime: number;
    /** 服务状态1：正常使用中2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。3：已过期。查询不到设备保存在云端的数据。4：等待服务生效。 */
    Status: number;
    /** 云存定单列表 */
    Data: StorageOrder[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeStreamRequest {
    /** 设备TID */
    Tid?: string;
    /** 终端用户ID */
    AccessId?: string;
    /** 直播协议, 可选值：RTSP、RTMP、HLS、HLS-fmp4 */
    Protocol?: string;
    /** 音视频流地址 */
    Address?: string;
    /** 设备访问token，访问用户未绑定的设备时，需提供该参数 */
    AccessToken?: string;
  }

  interface DescribeStreamResponse {
    /** 返回参数结构 */
    Data: Data | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeTraceIdsRequest {
  }

  interface DescribeTraceIdsResponse {
    /** 设备TID列表，列表元素之间以“,”分隔 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeTraceStatusRequest {
    /** 设备TID列表 */
    Tids: string[];
  }

  interface DescribeTraceStatusResponse {
    /** 设备追踪状态列表 */
    Data?: TraceStatus[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DisableDeviceRequest {
    /** 设备TID ≤100 */
    Tids: string[];
  }

  interface DisableDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DisableDeviceStreamRequest {
    /** 设备TID列表 */
    Tids: string[];
  }

  interface DisableDeviceStreamResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DisableOtaVersionRequest {
    /** 产品ID */
    ProductId: string;
    /** 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288 */
    OtaVersion: string;
    /** 操作人 */
    Operator?: string;
  }

  interface DisableOtaVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDeviceActionRequest {
    /** 设备TID */
    Tid: string;
    /** 如果设备处于休眠状态，是否唤醒设备 */
    Wakeup: boolean;
    /** 物模型的分支路径 */
    Branch: string;
    /** 写入的物模型数据，如果是json需要转义成字符串 */
    Value: string;
    /** Value字段的类型是否为数值（float、int） */
    IsNum?: boolean;
  }

  interface ModifyDeviceActionResponse {
    /** 设备端的响应结果 */
    Data?: string | null;
    /** 任务ID若设备端未能及时响应时，会返回此字段，用户可以通过DescribeModelDataRet获取设备的最终响应结果。 */
    TaskId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDevicePropertyRequest {
    /** 设备TID */
    Tid: string;
    /** 如果设备处于休眠状态，是否唤醒设备 */
    Wakeup: boolean;
    /** 物模型的分支路径 */
    Branch: string;
    /** 写入的物模型数据，如果是json需要转义成字符串 */
    Value: string;
    /** Value字段是否为数值（float、int） */
    IsNum?: boolean;
  }

  interface ModifyDevicePropertyResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyDeviceRequest {
    /** 设备ID */
    Tid: string;
    /** 用户ID */
    AccessId: string;
    /** 设备昵称，最多不超过64个字符 */
    Nick: string;
  }

  interface ModifyDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyProductRequest {
    /** 产品ID */
    ProductId: string;
    /** 产品名称 */
    ProductName: string;
    /** 产品描述 */
    ProductDescription: string;
    /** 主芯片产商ID */
    ChipManufactureId?: string;
    /** 主芯片ID */
    ChipId?: string;
  }

  interface ModifyProductResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyVerContentRequest {
    /** 产品id */
    ProductId: string;
    /** 需要修改的版本号 */
    OtaVersion: string;
    /** 操作人,字符长度<=64 */
    Operator?: string;
    /** 备注信息 */
    Remark?: string;
    /** 版本发布的描述信息，需要国际化，可以为空 */
    Contents?: Contents;
  }

  interface ModifyVerContentResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RefundStorageServiceRequest {
    /** 云存服务ID */
    ServiceId: string;
    /** 云存子订单ID。如果指定子订单ID,则仅退订该子订单，如果未指定子定单ID，则退订所有子订单 */
    OrderId?: string;
  }

  interface RefundStorageServiceResponse {
    /** 云存服务ID */
    ServiceId: string;
    /** 云存服务所在的区域 */
    StorageRegion: string;
    /** 设备TID */
    Tid: string;
    /** 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应) */
    ChnNum: number;
    /** 终端用户在IoT Video平台的注册ID */
    AccessId: string;
    /** 服务开始时间 */
    StartTime: number;
    /** 服务失效时间 */
    EndTime: number;
    /** 服务状态1：正常使用中2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。3：已过期。查询不到设备保存在云端的数据。4：等待服务生效。 */
    Status: number;
    /** 有效云存定单列表 */
    Data: StorageOrder[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RunDeviceRequest {
    /** TID列表 ≤100 */
    Tids: string[];
  }

  interface RunDeviceResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RunDeviceStreamRequest {
    /** 设备TID 列表 */
    Tids: string[];
  }

  interface RunDeviceStreamResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RunIotModelRequest {
    /** 产品ID */
    ProductId: string;
    /** 物模型定义，json格式的字符串 */
    IotModel: string;
  }

  interface RunIotModelResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RunOtaVersionRequest {
    /** 产品ID */
    ProductId: string;
    /** 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288 */
    OtaVersion: string;
    /** 灰度值,取值范围0-100，为0时相当于暂停发布 */
    GrayValue: number;
    /** 指定的旧版本 */
    OldVersions?: string[];
    /** 操作人 */
    Operator?: string;
    /** 备注信息 */
    Remark?: string;
    /** 版本发布的描述信息，需要国际化，可以为空 */
    Contents?: Contents;
  }

  interface RunOtaVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RunTestOtaVersionRequest {
    /** 产品ID */
    ProductId: string;
    /** 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288 */
    OtaVersion: string;
    /** 指定可升级的设备TID */
    Tids: string[];
    /** 操作人 */
    Operator?: string;
    /** 备注信息 */
    Remark?: string;
  }

  interface RunTestOtaVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SendOnlineMsgRequest {
    /** 设备TID */
    Tid: string;
    /** 如果设备处于休眠状态，是否唤醒设备 */
    Wakeup: boolean;
    /** 等待回应类型0：不等待设备回应直接响应请求;1：要求设备确认消息已接收,或等待超时后返回;2：要求设备进行响应处理,收到设备的响应数据后,将设备响应数据回应给请求方; */
    WaitResp: number;
    /** 消息主题 */
    MsgTopic: string;
    /** 消息内容，最大长度不超过8k字节 */
    MsgContent: string;
  }

  interface SendOnlineMsgResponse {
    /** 若返回此项则表明需要用户用此taskID进行查询请求是否成功(只有waitresp不等于0的情况下才可能会返回该taskID项) */
    TaskId?: string;
    /** 设备响应信息 */
    Data?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SetMessageQueueRequest {
    /** 产品ID */
    ProductId: string;
    /** 消息队列类型 1-CMQ; 2-Ckafka */
    MsgQueueType: number;
    /** 消息类型,整型值（0-31）之间以“,”分隔0.设备在线状态变更1.常亮属性(ProConst)变更2.可写属性(ProWritable)变更3.只读属性(ProReadonly)变更4.设备控制(Action)5.设备事件(Event)6.系统事件(System) */
    MsgType: string;
    /** 消息队列主题，不超过32字符 */
    Topic: string;
    /** kafka消息队列的实例名，不超过64字符 */
    Instance: string;
    /** 消息地域，不超过32字符 */
    MsgRegion: string;
  }

  interface SetMessageQueueResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UpgradeDeviceRequest {
    /** 设备TID */
    Tid: string;
    /** 固件版本号 */
    OtaVersion: string;
    /** 是否立即升级 */
    UpgradeNow: boolean;
  }

  interface UpgradeDeviceResponse {
    /** 设备端返回的数据 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UploadOtaVersionRequest {
    /** 产品ID */
    ProductId: string;
    /** 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288 */
    OtaVersion: string;
    /** 固件版本URL */
    VersionUrl: string;
    /** 文件大小，单位：byte */
    FileSize?: number;
    /** 文件md5校验码（32字符） */
    Md5?: string;
    /** 操作人 */
    Operator?: string;
    /** 备注信息 */
    Remark?: string;
    /** 版本发布的描述信息，需要国际化，可以为空 */
    Contents?: Contents;
  }

  interface UploadOtaVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** {@link Iotvideo 物联网智能视频服务} */
declare interface Iotvideo {
  (): Versions;
  /** {@link ApplyAIModel 申请AI模型}({@link ApplyAIModelRequest 请求参数}): {@link ApplyAIModelResponse 返回参数} */
  ApplyAIModel(data: ApplyAIModelRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyAIModelResponse>;
  /** {@link BatchUpdateFirmware 批量更新固件}({@link BatchUpdateFirmwareRequest 请求参数}): {@link BatchUpdateFirmwareResponse 返回参数} */
  BatchUpdateFirmware(data: BatchUpdateFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<BatchUpdateFirmwareResponse>;
  /** {@link BindCloudStorageUser 绑定云存用户}({@link BindCloudStorageUserRequest 请求参数}): {@link BindCloudStorageUserResponse 返回参数} */
  BindCloudStorageUser(data: BindCloudStorageUserRequest, config?: AxiosRequestConfig): AxiosPromise<BindCloudStorageUserResponse>;
  /** {@link CallDeviceActionAsync 异步调用设备行为}({@link CallDeviceActionAsyncRequest 请求参数}): {@link CallDeviceActionAsyncResponse 返回参数} */
  CallDeviceActionAsync(data: CallDeviceActionAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<CallDeviceActionAsyncResponse>;
  /** {@link CallDeviceActionSync 同步调用设备行为}({@link CallDeviceActionSyncRequest 请求参数}): {@link CallDeviceActionSyncResponse 返回参数} */
  CallDeviceActionSync(data: CallDeviceActionSyncRequest, config?: AxiosRequestConfig): AxiosPromise<CallDeviceActionSyncResponse>;
  /** {@link CancelAIModelApplication 取消AI模型申请}({@link CancelAIModelApplicationRequest 请求参数}): {@link CancelAIModelApplicationResponse 返回参数} */
  CancelAIModelApplication(data: CancelAIModelApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<CancelAIModelApplicationResponse>;
  /** {@link CancelDeviceFirmwareTask 取消设备升级任务}({@link CancelDeviceFirmwareTaskRequest 请求参数}): {@link CancelDeviceFirmwareTaskResponse 返回参数} */
  CancelDeviceFirmwareTask(data: CancelDeviceFirmwareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelDeviceFirmwareTaskResponse>;
  /** {@link CheckForwardAuth 判断是否开启的转发的权限}({@link CheckForwardAuthRequest 请求参数}): {@link CheckForwardAuthResponse 返回参数} */
  CheckForwardAuth(data: CheckForwardAuthRequest, config?: AxiosRequestConfig): AxiosPromise<CheckForwardAuthResponse>;
  /** {@link ControlDeviceData 设备远程控制}({@link ControlDeviceDataRequest 请求参数}): {@link ControlDeviceDataResponse 返回参数} */
  ControlDeviceData(data: ControlDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceDataResponse>;
  /** {@link CreateAIDetection 发起AI推理请求}({@link CreateAIDetectionRequest 请求参数}): {@link CreateAIDetectionResponse 返回参数} */
  CreateAIDetection(data: CreateAIDetectionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIDetectionResponse>;
  /** {@link CreateBatch 创建批次}({@link CreateBatchRequest 请求参数}): {@link CreateBatchResponse 返回参数} */
  CreateBatch(data: CreateBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchResponse>;
  /** {@link CreateCOSCredentials 创建COS上传密钥}({@link CreateCOSCredentialsRequest 请求参数}): {@link CreateCOSCredentialsResponse 返回参数} */
  CreateCOSCredentials(data: CreateCOSCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCOSCredentialsResponse>;
  /** {@link CreateCloudStorage 开通云存服务}({@link CreateCloudStorageRequest 请求参数}): {@link CreateCloudStorageResponse 返回参数} */
  CreateCloudStorage(data: CreateCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudStorageResponse>;
  /** {@link CreateDataForward 创建数据转发}({@link CreateDataForwardRequest 请求参数}): {@link CreateDataForwardResponse 返回参数} */
  CreateDataForward(data: CreateDataForwardRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataForwardResponse>;
  /** {@link CreateForwardRule 创建转发规则}({@link CreateForwardRuleRequest 请求参数}): {@link CreateForwardRuleResponse 返回参数} */
  CreateForwardRule(data: CreateForwardRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateForwardRuleResponse>;
  /** {@link CreateProduct 创建产品}({@link CreateProductRequest 请求参数}): {@link CreateProductResponse 返回参数} */
  CreateProduct(data: CreateProductRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProductResponse>;
  /** {@link CreateTaskFileUrl 获取任务文件上传链接}({@link CreateTaskFileUrlRequest 请求参数}): {@link CreateTaskFileUrlResponse 返回参数} */
  CreateTaskFileUrl(data: CreateTaskFileUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFileUrlResponse>;
  /** {@link DeleteDevice 删除设备}({@link DeleteDeviceRequest 请求参数}): {@link DeleteDeviceResponse 返回参数} */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** {@link DeleteFirmware 删除固件}({@link DeleteFirmwareRequest 请求参数}): {@link DeleteFirmwareResponse 返回参数} */
  DeleteFirmware(data: DeleteFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFirmwareResponse>;
  /** {@link DeleteForwardRule 删除转发规则}({@link DeleteForwardRuleRequest 请求参数}): {@link DeleteForwardRuleResponse 返回参数} */
  DeleteForwardRule(data: DeleteForwardRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteForwardRuleResponse>;
  /** {@link DeleteProduct 删除产品}({@link DeleteProductRequest 请求参数}): {@link DeleteProductResponse 返回参数} */
  DeleteProduct(data: DeleteProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProductResponse>;
  /** {@link DescribeAIModelApplications 用户AI模型申请记录}({@link DescribeAIModelApplicationsRequest 请求参数}): {@link DescribeAIModelApplicationsResponse 返回参数} */
  DescribeAIModelApplications(data: DescribeAIModelApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIModelApplicationsResponse>;
  /** {@link DescribeAIModelChannel 查看AI推理结果推送配置}({@link DescribeAIModelChannelRequest 请求参数}): {@link DescribeAIModelChannelResponse 返回参数} */
  DescribeAIModelChannel(data: DescribeAIModelChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIModelChannelResponse>;
  /** {@link DescribeAIModelUsage 查看AI模型资源包}({@link DescribeAIModelUsageRequest 请求参数}): {@link DescribeAIModelUsageResponse 返回参数} */
  DescribeAIModelUsage(data: DescribeAIModelUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIModelUsageResponse>;
  /** {@link DescribeAIModels 拉取AI模型列表}({@link DescribeAIModelsRequest 请求参数}): {@link DescribeAIModelsResponse 返回参数} */
  DescribeAIModels(data: DescribeAIModelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIModelsResponse>;
  /** {@link DescribeAccount 获取消费版账号信息}({@link DescribeAccountRequest 请求参数}): {@link DescribeAccountResponse 返回参数} */
  DescribeAccount(data: DescribeAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountResponse>;
  /** {@link DescribeBalance 查询账户余额}({@link DescribeBalanceRequest 请求参数}): {@link DescribeBalanceResponse 返回参数} */
  DescribeBalance(data: DescribeBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBalanceResponse>;
  /** {@link DescribeBalanceTransactions 拉取账户流水}({@link DescribeBalanceTransactionsRequest 请求参数}): {@link DescribeBalanceTransactionsResponse 返回参数} */
  DescribeBalanceTransactions(data: DescribeBalanceTransactionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBalanceTransactionsResponse>;
  /** {@link DescribeBatch 获取批次详情}({@link DescribeBatchRequest 请求参数}): {@link DescribeBatchResponse 返回参数} */
  DescribeBatch(data: DescribeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchResponse>;
  /** {@link DescribeBatchs 获取批次列表}({@link DescribeBatchsRequest 请求参数}): {@link DescribeBatchsResponse 返回参数} */
  DescribeBatchs(data: DescribeBatchsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchsResponse>;
  /** {@link DescribeBonuses 查看运营活动资源包列表}({@link DescribeBonusesRequest 请求参数}): {@link DescribeBonusesResponse 返回参数} */
  DescribeBonuses(data: DescribeBonusesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBonusesResponse>;
  /** {@link DescribeCategory 获取Category详情}({@link DescribeCategoryRequest 请求参数}): {@link DescribeCategoryResponse 返回参数} */
  DescribeCategory(data: DescribeCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCategoryResponse>;
  /** {@link DescribeCloudStorage 获取设备云存服务详情}({@link DescribeCloudStorageRequest 请求参数}): {@link DescribeCloudStorageResponse 返回参数} */
  DescribeCloudStorage(data: DescribeCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageResponse>;
  /** {@link DescribeCloudStorageDate 获取具有云存的日期}({@link DescribeCloudStorageDateRequest 请求参数}): {@link DescribeCloudStorageDateResponse 返回参数} */
  DescribeCloudStorageDate(data: DescribeCloudStorageDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageDateResponse>;
  /** {@link DescribeCloudStorageEvents 拉取云存事件列表}({@link DescribeCloudStorageEventsRequest 请求参数}): {@link DescribeCloudStorageEventsResponse 返回参数} */
  DescribeCloudStorageEvents(data: DescribeCloudStorageEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageEventsResponse>;
  /** {@link DescribeCloudStoragePackageConsumeDetails 获取云存套餐包消耗详细记录}({@link DescribeCloudStoragePackageConsumeDetailsRequest 请求参数}): {@link DescribeCloudStoragePackageConsumeDetailsResponse 返回参数} */
  DescribeCloudStoragePackageConsumeDetails(data: DescribeCloudStoragePackageConsumeDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStoragePackageConsumeDetailsResponse>;
  /** {@link DescribeCloudStoragePackageConsumeStats 获取云存套餐包消耗统计}({@link DescribeCloudStoragePackageConsumeStatsRequest 请求参数}): {@link DescribeCloudStoragePackageConsumeStatsResponse 返回参数} */
  DescribeCloudStoragePackageConsumeStats(data: DescribeCloudStoragePackageConsumeStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStoragePackageConsumeStatsResponse>;
  /** {@link DescribeCloudStorageStreamData 获取设备图片流数据}({@link DescribeCloudStorageStreamDataRequest 请求参数}): {@link DescribeCloudStorageStreamDataResponse 返回参数} */
  DescribeCloudStorageStreamData(data: DescribeCloudStorageStreamDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageStreamDataResponse>;
  /** {@link DescribeCloudStorageThumbnail 拉取云存事件缩略图}({@link DescribeCloudStorageThumbnailRequest 请求参数}): {@link DescribeCloudStorageThumbnailResponse 返回参数} */
  DescribeCloudStorageThumbnail(data: DescribeCloudStorageThumbnailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageThumbnailResponse>;
  /** {@link DescribeCloudStorageTime 获取某一天云存时间轴}({@link DescribeCloudStorageTimeRequest 请求参数}): {@link DescribeCloudStorageTimeResponse 返回参数} */
  DescribeCloudStorageTime(data: DescribeCloudStorageTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageTimeResponse>;
  /** {@link DescribeCloudStorageUsers 拉取云存用户列表}({@link DescribeCloudStorageUsersRequest 请求参数}): {@link DescribeCloudStorageUsersResponse 返回参数} */
  DescribeCloudStorageUsers(data: DescribeCloudStorageUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageUsersResponse>;
  /** {@link DescribeDataForwardList 获取数据转发列表}({@link DescribeDataForwardListRequest 请求参数}): {@link DescribeDataForwardListResponse 返回参数} */
  DescribeDataForwardList(data: DescribeDataForwardListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataForwardListResponse>;
  /** {@link DescribeDevice 查看设备详情}({@link DescribeDeviceRequest 请求参数}): {@link DescribeDeviceResponse 返回参数} */
  DescribeDevice(data: DescribeDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceResponse>;
  /** {@link DescribeDeviceActionHistory 获取设备动作历史}({@link DescribeDeviceActionHistoryRequest 请求参数}): {@link DescribeDeviceActionHistoryResponse 返回参数} */
  DescribeDeviceActionHistory(data: DescribeDeviceActionHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceActionHistoryResponse>;
  /** {@link DescribeDeviceCommLog 获取设备通讯日志}({@link DescribeDeviceCommLogRequest 请求参数}): {@link DescribeDeviceCommLogResponse 返回参数} */
  DescribeDeviceCommLog(data: DescribeDeviceCommLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceCommLogResponse>;
  /** {@link DescribeDeviceData 获取设备属性数据}({@link DescribeDeviceDataRequest 请求参数}): {@link DescribeDeviceDataResponse 返回参数} */
  DescribeDeviceData(data: DescribeDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataResponse>;
  /** {@link DescribeDeviceDataHistory 获取设备历史数据}({@link DescribeDeviceDataHistoryRequest 请求参数}): {@link DescribeDeviceDataHistoryResponse 返回参数} */
  DescribeDeviceDataHistory(data: DescribeDeviceDataHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataHistoryResponse>;
  /** {@link DescribeDeviceDataStats 查询设备数据统计}({@link DescribeDeviceDataStatsRequest 请求参数}): {@link DescribeDeviceDataStatsResponse 返回参数} */
  DescribeDeviceDataStats(data: DescribeDeviceDataStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataStatsResponse>;
  /** {@link DescribeDeviceEventHistory 获取设备的历史事件}({@link DescribeDeviceEventHistoryRequest 请求参数}): {@link DescribeDeviceEventHistoryResponse 返回参数} */
  DescribeDeviceEventHistory(data: DescribeDeviceEventHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceEventHistoryResponse>;
  /** {@link DescribeDeviceStatusLog 获取设备上下线日志}({@link DescribeDeviceStatusLogRequest 请求参数}): {@link DescribeDeviceStatusLogResponse 返回参数} */
  DescribeDeviceStatusLog(data: DescribeDeviceStatusLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceStatusLogResponse>;
  /** {@link DescribeDevices 获取设备列表}({@link DescribeDevicesRequest 请求参数}): {@link DescribeDevicesResponse 返回参数} */
  DescribeDevices(data: DescribeDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesResponse>;
  /** {@link DescribeFirmware 查询固件信息}({@link DescribeFirmwareRequest 请求参数}): {@link DescribeFirmwareResponse 返回参数} */
  DescribeFirmware(data: DescribeFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareResponse>;
  /** {@link DescribeFirmwareTask 查询固件升级任务详情}({@link DescribeFirmwareTaskRequest 请求参数}): {@link DescribeFirmwareTaskResponse 返回参数} */
  DescribeFirmwareTask(data: DescribeFirmwareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTaskResponse>;
  /** {@link DescribeFirmwareTaskDevices 查询固件升级任务的设备列表}({@link DescribeFirmwareTaskDevicesRequest 请求参数}): {@link DescribeFirmwareTaskDevicesResponse 返回参数} */
  DescribeFirmwareTaskDevices(data: DescribeFirmwareTaskDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTaskDevicesResponse>;
  /** {@link DescribeFirmwareTaskDistribution 查询固件升级任务状态分布}({@link DescribeFirmwareTaskDistributionRequest 请求参数}): {@link DescribeFirmwareTaskDistributionResponse 返回参数} */
  DescribeFirmwareTaskDistribution(data: DescribeFirmwareTaskDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTaskDistributionResponse>;
  /** {@link DescribeFirmwareTaskStatistics 查询固件升级任务统计信息}({@link DescribeFirmwareTaskStatisticsRequest 请求参数}): {@link DescribeFirmwareTaskStatisticsResponse 返回参数} */
  DescribeFirmwareTaskStatistics(data: DescribeFirmwareTaskStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTaskStatisticsResponse>;
  /** {@link DescribeFirmwareTasks 查询固件升级任务列表}({@link DescribeFirmwareTasksRequest 请求参数}): {@link DescribeFirmwareTasksResponse 返回参数} */
  DescribeFirmwareTasks(data: DescribeFirmwareTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTasksResponse>;
  /** {@link DescribeForwardRule 获取产品转发规则}({@link DescribeForwardRuleRequest 请求参数}): {@link DescribeForwardRuleResponse 返回参数} */
  DescribeForwardRule(data: DescribeForwardRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeForwardRuleResponse>;
  /** {@link DescribeMessageDataStats 查询设备消息数量统计}({@link DescribeMessageDataStatsRequest 请求参数}): {@link DescribeMessageDataStatsResponse 返回参数} */
  DescribeMessageDataStats(data: DescribeMessageDataStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageDataStatsResponse>;
  /** {@link DescribeModelDefinition 查询产品数据模板}({@link DescribeModelDefinitionRequest 请求参数}): {@link DescribeModelDefinitionResponse 返回参数} */
  DescribeModelDefinition(data: DescribeModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelDefinitionResponse>;
  /** {@link DescribePackageConsumeTask 查询套餐消耗记录详情}({@link DescribePackageConsumeTaskRequest 请求参数}): {@link DescribePackageConsumeTaskResponse 返回参数} */
  DescribePackageConsumeTask(data: DescribePackageConsumeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackageConsumeTaskResponse>;
  /** {@link DescribePackageConsumeTasks 查询套餐消耗记录列表}({@link DescribePackageConsumeTasksRequest 请求参数}): {@link DescribePackageConsumeTasksResponse 返回参数} */
  DescribePackageConsumeTasks(data: DescribePackageConsumeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackageConsumeTasksResponse>;
  /** {@link DescribeProduct 获取产品详情}({@link DescribeProductRequest 请求参数}): {@link DescribeProductResponse 返回参数} */
  DescribeProduct(data: DescribeProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductResponse>;
  /** {@link DescribeProductDynamicRegister 获取产品动态注册详情}({@link DescribeProductDynamicRegisterRequest 请求参数}): {@link DescribeProductDynamicRegisterResponse 返回参数} */
  DescribeProductDynamicRegister(data: DescribeProductDynamicRegisterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductDynamicRegisterResponse>;
  /** {@link DescribeProducts 获取产品列表}({@link DescribeProductsRequest 请求参数}): {@link DescribeProductsResponse 返回参数} */
  DescribeProducts(data: DescribeProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductsResponse>;
  /** {@link DescribePushChannel 查看推送通道}({@link DescribePushChannelRequest 请求参数}): {@link DescribePushChannelResponse 返回参数} */
  DescribePushChannel(data: DescribePushChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePushChannelResponse>;
  /** {@link DescribeSDKLog 获取设备sdk日志}({@link DescribeSDKLogRequest 请求参数}): {@link DescribeSDKLogResponse 返回参数} */
  DescribeSDKLog(data: DescribeSDKLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSDKLogResponse>;
  /** {@link DescribeUser 获取用户信息}({@link DescribeUserRequest 请求参数}): {@link DescribeUserResponse 返回参数} */
  DescribeUser(data?: DescribeUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResponse>;
  /** {@link EditFirmware 编辑固件信息}({@link EditFirmwareRequest 请求参数}): {@link EditFirmwareResponse 返回参数} */
  EditFirmware(data: EditFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<EditFirmwareResponse>;
  /** {@link GenSingleDeviceSignatureOfPublic 生成单个设备绑定的签名}({@link GenSingleDeviceSignatureOfPublicRequest 请求参数}): {@link GenSingleDeviceSignatureOfPublicResponse 返回参数} */
  GenSingleDeviceSignatureOfPublic(data: GenSingleDeviceSignatureOfPublicRequest, config?: AxiosRequestConfig): AxiosPromise<GenSingleDeviceSignatureOfPublicResponse>;
  /** {@link GenerateSignedVideoURL 获取视频防盗链播放URL}({@link GenerateSignedVideoURLRequest 请求参数}): {@link GenerateSignedVideoURLResponse 返回参数} */
  GenerateSignedVideoURL(data: GenerateSignedVideoURLRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateSignedVideoURLResponse>;
  /** {@link GetAllFirmwareVersion 获取所有版本列表}({@link GetAllFirmwareVersionRequest 请求参数}): {@link GetAllFirmwareVersionResponse 返回参数} */
  GetAllFirmwareVersion(data: GetAllFirmwareVersionRequest, config?: AxiosRequestConfig): AxiosPromise<GetAllFirmwareVersionResponse>;
  /** {@link GetFirmwareURL 获取固件下载地址}({@link GetFirmwareURLRequest 请求参数}): {@link GetFirmwareURLResponse 返回参数} */
  GetFirmwareURL(data: GetFirmwareURLRequest, config?: AxiosRequestConfig): AxiosPromise<GetFirmwareURLResponse>;
  /** {@link ImportModelDefinition 导入其它产品的数据模板}({@link ImportModelDefinitionRequest 请求参数}): {@link ImportModelDefinitionResponse 返回参数} */
  ImportModelDefinition(data: ImportModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<ImportModelDefinitionResponse>;
  /** {@link InheritCloudStorageUser 继承云存用户}({@link InheritCloudStorageUserRequest 请求参数}): {@link InheritCloudStorageUserResponse 返回参数} */
  InheritCloudStorageUser(data: InheritCloudStorageUserRequest, config?: AxiosRequestConfig): AxiosPromise<InheritCloudStorageUserResponse>;
  /** {@link ListFirmwares 获取固件列表}({@link ListFirmwaresRequest 请求参数}): {@link ListFirmwaresResponse 返回参数} */
  ListFirmwares(data: ListFirmwaresRequest, config?: AxiosRequestConfig): AxiosPromise<ListFirmwaresResponse>;
  /** {@link ModifyDataForward 修改数据转发}({@link ModifyDataForwardRequest 请求参数}): {@link ModifyDataForwardResponse 返回参数} */
  ModifyDataForward(data: ModifyDataForwardRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataForwardResponse>;
  /** {@link ModifyDataForwardStatus 设置数据转发状态}({@link ModifyDataForwardStatusRequest 请求参数}): {@link ModifyDataForwardStatusResponse 返回参数} */
  ModifyDataForwardStatus(data: ModifyDataForwardStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataForwardStatusResponse>;
  /** {@link ModifyDevice 修改设备信息}({@link ModifyDeviceRequest 请求参数}): {@link ModifyDeviceResponse 返回参数} */
  ModifyDevice(data: ModifyDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceResponse>;
  /** {@link ModifyDeviceLogLevel 更新设备日志级别}({@link ModifyDeviceLogLevelRequest 请求参数}): {@link ModifyDeviceLogLevelResponse 返回参数} */
  ModifyDeviceLogLevel(data: ModifyDeviceLogLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceLogLevelResponse>;
  /** {@link ModifyForwardRule 修改转发规则}({@link ModifyForwardRuleRequest 请求参数}): {@link ModifyForwardRuleResponse 返回参数} */
  ModifyForwardRule(data: ModifyForwardRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyForwardRuleResponse>;
  /** {@link ModifyModelDefinition 修改产品数据模板}({@link ModifyModelDefinitionRequest 请求参数}): {@link ModifyModelDefinitionResponse 返回参数} */
  ModifyModelDefinition(data: ModifyModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelDefinitionResponse>;
  /** {@link ModifyProduct 修改产品信息}({@link ModifyProductRequest 请求参数}): {@link ModifyProductResponse 返回参数} */
  ModifyProduct(data: ModifyProductRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProductResponse>;
  /** {@link ModifyProductDynamicRegister 修改产品动态注册}({@link ModifyProductDynamicRegisterRequest 请求参数}): {@link ModifyProductDynamicRegisterResponse 返回参数} */
  ModifyProductDynamicRegister(data: ModifyProductDynamicRegisterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProductDynamicRegisterResponse>;
  /** {@link ModifyPushChannel 更新推送通道}({@link ModifyPushChannelRequest 请求参数}): {@link ModifyPushChannelResponse 返回参数} */
  ModifyPushChannel(data: ModifyPushChannelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPushChannelResponse>;
  /** {@link PublishMessage 设备透传指令控制}({@link PublishMessageRequest 请求参数}): {@link PublishMessageResponse 返回参数} */
  PublishMessage(data: PublishMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishMessageResponse>;
  /** {@link ReportAliveDevice 上报活跃设备}({@link ReportAliveDeviceRequest 请求参数}): {@link ReportAliveDeviceResponse 返回参数} */
  ReportAliveDevice(data: ReportAliveDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ReportAliveDeviceResponse>;
  /** {@link ResetCloudStorage 重置云存服务}({@link ResetCloudStorageRequest 请求参数}): {@link ResetCloudStorageResponse 返回参数} */
  ResetCloudStorage(data: ResetCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<ResetCloudStorageResponse>;
  /** {@link RetryDeviceFirmwareTask 重试设备升级任务}({@link RetryDeviceFirmwareTaskRequest 请求参数}): {@link RetryDeviceFirmwareTaskResponse 返回参数} */
  RetryDeviceFirmwareTask(data: RetryDeviceFirmwareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDeviceFirmwareTaskResponse>;
  /** {@link SetForwardAuth 设置转发权限}({@link SetForwardAuthRequest 请求参数}): {@link SetForwardAuthResponse 返回参数} */
  SetForwardAuth(data: SetForwardAuthRequest, config?: AxiosRequestConfig): AxiosPromise<SetForwardAuthResponse>;
  /** {@link TransferCloudStorage 转移云存服务}({@link TransferCloudStorageRequest 请求参数}): {@link TransferCloudStorageResponse 返回参数} */
  TransferCloudStorage(data: TransferCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<TransferCloudStorageResponse>;
  /** {@link UpdateAIModelChannel 更新AI推理结果推送配置}({@link UpdateAIModelChannelRequest 请求参数}): {@link UpdateAIModelChannelResponse 返回参数} */
  UpdateAIModelChannel(data: UpdateAIModelChannelRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAIModelChannelResponse>;
  /** {@link UploadFirmware 上传固件信息}({@link UploadFirmwareRequest 请求参数}): {@link UploadFirmwareResponse 返回参数} */
  UploadFirmware(data: UploadFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFirmwareResponse>;
  /** {@link WakeUpDevice 设备唤醒}({@link WakeUpDeviceRequest 请求参数}): {@link WakeUpDeviceResponse 返回参数} */
  WakeUpDevice(data: WakeUpDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<WakeUpDeviceResponse>;
  /** {@link V20201215.ApplyAIModel 申请AI模型}({@link V20201215.ApplyAIModelRequest 请求参数}): {@link V20201215.ApplyAIModelResponse 返回参数} */
  ApplyAIModel(data: V20201215.ApplyAIModelRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ApplyAIModelResponse>;
  /** {@link V20201215.BatchUpdateFirmware 批量更新固件}({@link V20201215.BatchUpdateFirmwareRequest 请求参数}): {@link V20201215.BatchUpdateFirmwareResponse 返回参数} */
  BatchUpdateFirmware(data: V20201215.BatchUpdateFirmwareRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.BatchUpdateFirmwareResponse>;
  /** {@link V20201215.BindCloudStorageUser 绑定云存用户}({@link V20201215.BindCloudStorageUserRequest 请求参数}): {@link V20201215.BindCloudStorageUserResponse 返回参数} */
  BindCloudStorageUser(data: V20201215.BindCloudStorageUserRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.BindCloudStorageUserResponse>;
  /** {@link V20201215.CancelAIModelApplication 取消AI模型申请}({@link V20201215.CancelAIModelApplicationRequest 请求参数}): {@link V20201215.CancelAIModelApplicationResponse 返回参数} */
  CancelAIModelApplication(data: V20201215.CancelAIModelApplicationRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CancelAIModelApplicationResponse>;
  /** {@link V20201215.CancelDeviceFirmwareTask 取消设备升级任务}({@link V20201215.CancelDeviceFirmwareTaskRequest 请求参数}): {@link V20201215.CancelDeviceFirmwareTaskResponse 返回参数} */
  CancelDeviceFirmwareTask(data: V20201215.CancelDeviceFirmwareTaskRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CancelDeviceFirmwareTaskResponse>;
  /** {@link V20201215.CheckForwardAuth 判断是否开启的转发的权限}({@link V20201215.CheckForwardAuthRequest 请求参数}): {@link V20201215.CheckForwardAuthResponse 返回参数} */
  CheckForwardAuth(data: V20201215.CheckForwardAuthRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CheckForwardAuthResponse>;
  /** {@link V20201215.ControlDeviceData 设备远程控制}({@link V20201215.ControlDeviceDataRequest 请求参数}): {@link V20201215.ControlDeviceDataResponse 返回参数} */
  ControlDeviceData(data: V20201215.ControlDeviceDataRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ControlDeviceDataResponse>;
  /** {@link V20201215.CreateAIDetection 发起AI推理请求}({@link V20201215.CreateAIDetectionRequest 请求参数}): {@link V20201215.CreateAIDetectionResponse 返回参数} */
  CreateAIDetection(data: V20201215.CreateAIDetectionRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateAIDetectionResponse>;
  /** {@link V20201215.CreateBatch 创建批次}({@link V20201215.CreateBatchRequest 请求参数}): {@link V20201215.CreateBatchResponse 返回参数} */
  CreateBatch(data: V20201215.CreateBatchRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateBatchResponse>;
  /** {@link V20201215.CreateCOSCredentials 创建COS上传密钥}({@link V20201215.CreateCOSCredentialsRequest 请求参数}): {@link V20201215.CreateCOSCredentialsResponse 返回参数} */
  CreateCOSCredentials(data: V20201215.CreateCOSCredentialsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateCOSCredentialsResponse>;
  /** {@link V20201215.CreateCloudStorage 开通云存服务}({@link V20201215.CreateCloudStorageRequest 请求参数}): {@link V20201215.CreateCloudStorageResponse 返回参数} */
  CreateCloudStorage(data: V20201215.CreateCloudStorageRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateCloudStorageResponse>;
  /** {@link V20201215.CreateDataForward 创建数据转发}({@link V20201215.CreateDataForwardRequest 请求参数}): {@link V20201215.CreateDataForwardResponse 返回参数} */
  CreateDataForward(data: V20201215.CreateDataForwardRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateDataForwardResponse>;
  /** {@link V20201215.CreateForwardRule 创建转发规则}({@link V20201215.CreateForwardRuleRequest 请求参数}): {@link V20201215.CreateForwardRuleResponse 返回参数} */
  CreateForwardRule(data: V20201215.CreateForwardRuleRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateForwardRuleResponse>;
  /** {@link V20201215.CreateProduct 创建产品}({@link V20201215.CreateProductRequest 请求参数}): {@link V20201215.CreateProductResponse 返回参数} */
  CreateProduct(data: V20201215.CreateProductRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateProductResponse>;
  /** {@link V20201215.CreateTaskFileUrl 获取任务文件上传链接}({@link V20201215.CreateTaskFileUrlRequest 请求参数}): {@link V20201215.CreateTaskFileUrlResponse 返回参数} */
  CreateTaskFileUrl(data: V20201215.CreateTaskFileUrlRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.CreateTaskFileUrlResponse>;
  /** {@link V20201215.DeleteDevice 删除设备}({@link V20201215.DeleteDeviceRequest 请求参数}): {@link V20201215.DeleteDeviceResponse 返回参数} */
  DeleteDevice(data: V20201215.DeleteDeviceRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DeleteDeviceResponse>;
  /** {@link V20201215.DeleteFirmware 删除固件}({@link V20201215.DeleteFirmwareRequest 请求参数}): {@link V20201215.DeleteFirmwareResponse 返回参数} */
  DeleteFirmware(data: V20201215.DeleteFirmwareRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DeleteFirmwareResponse>;
  /** {@link V20201215.DeleteForwardRule 删除转发规则}({@link V20201215.DeleteForwardRuleRequest 请求参数}): {@link V20201215.DeleteForwardRuleResponse 返回参数} */
  DeleteForwardRule(data: V20201215.DeleteForwardRuleRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DeleteForwardRuleResponse>;
  /** {@link V20201215.DeleteProduct 删除产品}({@link V20201215.DeleteProductRequest 请求参数}): {@link V20201215.DeleteProductResponse 返回参数} */
  DeleteProduct(data: V20201215.DeleteProductRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DeleteProductResponse>;
  /** {@link V20201215.DescribeAIModelApplications 用户AI模型申请记录}({@link V20201215.DescribeAIModelApplicationsRequest 请求参数}): {@link V20201215.DescribeAIModelApplicationsResponse 返回参数} */
  DescribeAIModelApplications(data: V20201215.DescribeAIModelApplicationsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeAIModelApplicationsResponse>;
  /** {@link V20201215.DescribeAIModelChannel 查看AI推理结果推送配置}({@link V20201215.DescribeAIModelChannelRequest 请求参数}): {@link V20201215.DescribeAIModelChannelResponse 返回参数} */
  DescribeAIModelChannel(data: V20201215.DescribeAIModelChannelRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeAIModelChannelResponse>;
  /** {@link V20201215.DescribeAIModelUsage 查看AI模型资源包}({@link V20201215.DescribeAIModelUsageRequest 请求参数}): {@link V20201215.DescribeAIModelUsageResponse 返回参数} */
  DescribeAIModelUsage(data: V20201215.DescribeAIModelUsageRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeAIModelUsageResponse>;
  /** {@link V20201215.DescribeAIModels 拉取AI模型列表}({@link V20201215.DescribeAIModelsRequest 请求参数}): {@link V20201215.DescribeAIModelsResponse 返回参数} */
  DescribeAIModels(data: V20201215.DescribeAIModelsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeAIModelsResponse>;
  /** {@link V20201215.DescribeBalance 查询账户余额}({@link V20201215.DescribeBalanceRequest 请求参数}): {@link V20201215.DescribeBalanceResponse 返回参数} */
  DescribeBalance(data: V20201215.DescribeBalanceRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeBalanceResponse>;
  /** {@link V20201215.DescribeBalanceTransactions 拉取账户流水}({@link V20201215.DescribeBalanceTransactionsRequest 请求参数}): {@link V20201215.DescribeBalanceTransactionsResponse 返回参数} */
  DescribeBalanceTransactions(data: V20201215.DescribeBalanceTransactionsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeBalanceTransactionsResponse>;
  /** {@link V20201215.DescribeBatch 获取批次详情}({@link V20201215.DescribeBatchRequest 请求参数}): {@link V20201215.DescribeBatchResponse 返回参数} */
  DescribeBatch(data: V20201215.DescribeBatchRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeBatchResponse>;
  /** {@link V20201215.DescribeBatchs 获取批次列表}({@link V20201215.DescribeBatchsRequest 请求参数}): {@link V20201215.DescribeBatchsResponse 返回参数} */
  DescribeBatchs(data: V20201215.DescribeBatchsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeBatchsResponse>;
  /** {@link V20201215.DescribeCategory 获取Category详情}({@link V20201215.DescribeCategoryRequest 请求参数}): {@link V20201215.DescribeCategoryResponse 返回参数} */
  DescribeCategory(data: V20201215.DescribeCategoryRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCategoryResponse>;
  /** {@link V20201215.DescribeCloudStorage 获取设备云存服务详情}({@link V20201215.DescribeCloudStorageRequest 请求参数}): {@link V20201215.DescribeCloudStorageResponse 返回参数} */
  DescribeCloudStorage(data: V20201215.DescribeCloudStorageRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCloudStorageResponse>;
  /** {@link V20201215.DescribeCloudStorageDate 获取具有云存的日期}({@link V20201215.DescribeCloudStorageDateRequest 请求参数}): {@link V20201215.DescribeCloudStorageDateResponse 返回参数} */
  DescribeCloudStorageDate(data: V20201215.DescribeCloudStorageDateRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCloudStorageDateResponse>;
  /** {@link V20201215.DescribeCloudStorageEvents 拉取云存事件列表}({@link V20201215.DescribeCloudStorageEventsRequest 请求参数}): {@link V20201215.DescribeCloudStorageEventsResponse 返回参数} */
  DescribeCloudStorageEvents(data: V20201215.DescribeCloudStorageEventsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCloudStorageEventsResponse>;
  /** {@link V20201215.DescribeCloudStorageThumbnail 拉取云存事件缩略图}({@link V20201215.DescribeCloudStorageThumbnailRequest 请求参数}): {@link V20201215.DescribeCloudStorageThumbnailResponse 返回参数} */
  DescribeCloudStorageThumbnail(data: V20201215.DescribeCloudStorageThumbnailRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCloudStorageThumbnailResponse>;
  /** {@link V20201215.DescribeCloudStorageTime 获取某一天云存时间轴}({@link V20201215.DescribeCloudStorageTimeRequest 请求参数}): {@link V20201215.DescribeCloudStorageTimeResponse 返回参数} */
  DescribeCloudStorageTime(data: V20201215.DescribeCloudStorageTimeRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCloudStorageTimeResponse>;
  /** {@link V20201215.DescribeCloudStorageUsers 拉取云存用户列表}({@link V20201215.DescribeCloudStorageUsersRequest 请求参数}): {@link V20201215.DescribeCloudStorageUsersResponse 返回参数} */
  DescribeCloudStorageUsers(data: V20201215.DescribeCloudStorageUsersRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeCloudStorageUsersResponse>;
  /** {@link V20201215.DescribeDataForwardList 获取数据转发列表}({@link V20201215.DescribeDataForwardListRequest 请求参数}): {@link V20201215.DescribeDataForwardListResponse 返回参数} */
  DescribeDataForwardList(data: V20201215.DescribeDataForwardListRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDataForwardListResponse>;
  /** {@link V20201215.DescribeDevice 查看设备详情}({@link V20201215.DescribeDeviceRequest 请求参数}): {@link V20201215.DescribeDeviceResponse 返回参数} */
  DescribeDevice(data: V20201215.DescribeDeviceRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceResponse>;
  /** {@link V20201215.DescribeDeviceActionHistory 获取设备动作历史}({@link V20201215.DescribeDeviceActionHistoryRequest 请求参数}): {@link V20201215.DescribeDeviceActionHistoryResponse 返回参数} */
  DescribeDeviceActionHistory(data: V20201215.DescribeDeviceActionHistoryRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceActionHistoryResponse>;
  /** {@link V20201215.DescribeDeviceCommLog 获取设备通讯日志}({@link V20201215.DescribeDeviceCommLogRequest 请求参数}): {@link V20201215.DescribeDeviceCommLogResponse 返回参数} */
  DescribeDeviceCommLog(data: V20201215.DescribeDeviceCommLogRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceCommLogResponse>;
  /** {@link V20201215.DescribeDeviceData 获取设备属性数据}({@link V20201215.DescribeDeviceDataRequest 请求参数}): {@link V20201215.DescribeDeviceDataResponse 返回参数} */
  DescribeDeviceData(data: V20201215.DescribeDeviceDataRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceDataResponse>;
  /** {@link V20201215.DescribeDeviceDataHistory 获取设备历史数据}({@link V20201215.DescribeDeviceDataHistoryRequest 请求参数}): {@link V20201215.DescribeDeviceDataHistoryResponse 返回参数} */
  DescribeDeviceDataHistory(data: V20201215.DescribeDeviceDataHistoryRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceDataHistoryResponse>;
  /** {@link V20201215.DescribeDeviceEventHistory 获取设备的历史事件}({@link V20201215.DescribeDeviceEventHistoryRequest 请求参数}): {@link V20201215.DescribeDeviceEventHistoryResponse 返回参数} */
  DescribeDeviceEventHistory(data: V20201215.DescribeDeviceEventHistoryRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceEventHistoryResponse>;
  /** {@link V20201215.DescribeDeviceStatusLog 获取设备上下线日志}({@link V20201215.DescribeDeviceStatusLogRequest 请求参数}): {@link V20201215.DescribeDeviceStatusLogResponse 返回参数} */
  DescribeDeviceStatusLog(data: V20201215.DescribeDeviceStatusLogRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDeviceStatusLogResponse>;
  /** {@link V20201215.DescribeDevices 获取设备列表}({@link V20201215.DescribeDevicesRequest 请求参数}): {@link V20201215.DescribeDevicesResponse 返回参数} */
  DescribeDevices(data: V20201215.DescribeDevicesRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeDevicesResponse>;
  /** {@link V20201215.DescribeFirmware 查询固件信息}({@link V20201215.DescribeFirmwareRequest 请求参数}): {@link V20201215.DescribeFirmwareResponse 返回参数} */
  DescribeFirmware(data: V20201215.DescribeFirmwareRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeFirmwareResponse>;
  /** {@link V20201215.DescribeFirmwareTask 查询固件升级任务详情}({@link V20201215.DescribeFirmwareTaskRequest 请求参数}): {@link V20201215.DescribeFirmwareTaskResponse 返回参数} */
  DescribeFirmwareTask(data: V20201215.DescribeFirmwareTaskRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeFirmwareTaskResponse>;
  /** {@link V20201215.DescribeFirmwareTaskDevices 查询固件升级任务的设备列表}({@link V20201215.DescribeFirmwareTaskDevicesRequest 请求参数}): {@link V20201215.DescribeFirmwareTaskDevicesResponse 返回参数} */
  DescribeFirmwareTaskDevices(data: V20201215.DescribeFirmwareTaskDevicesRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeFirmwareTaskDevicesResponse>;
  /** {@link V20201215.DescribeFirmwareTaskDistribution 查询固件升级任务状态分布}({@link V20201215.DescribeFirmwareTaskDistributionRequest 请求参数}): {@link V20201215.DescribeFirmwareTaskDistributionResponse 返回参数} */
  DescribeFirmwareTaskDistribution(data: V20201215.DescribeFirmwareTaskDistributionRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeFirmwareTaskDistributionResponse>;
  /** {@link V20201215.DescribeFirmwareTaskStatistics 查询固件升级任务统计信息}({@link V20201215.DescribeFirmwareTaskStatisticsRequest 请求参数}): {@link V20201215.DescribeFirmwareTaskStatisticsResponse 返回参数} */
  DescribeFirmwareTaskStatistics(data: V20201215.DescribeFirmwareTaskStatisticsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeFirmwareTaskStatisticsResponse>;
  /** {@link V20201215.DescribeFirmwareTasks 查询固件升级任务列表}({@link V20201215.DescribeFirmwareTasksRequest 请求参数}): {@link V20201215.DescribeFirmwareTasksResponse 返回参数} */
  DescribeFirmwareTasks(data: V20201215.DescribeFirmwareTasksRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeFirmwareTasksResponse>;
  /** {@link V20201215.DescribeForwardRule 获取产品转发规则}({@link V20201215.DescribeForwardRuleRequest 请求参数}): {@link V20201215.DescribeForwardRuleResponse 返回参数} */
  DescribeForwardRule(data: V20201215.DescribeForwardRuleRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeForwardRuleResponse>;
  /** {@link V20201215.DescribeModelDefinition 查询产品数据模板}({@link V20201215.DescribeModelDefinitionRequest 请求参数}): {@link V20201215.DescribeModelDefinitionResponse 返回参数} */
  DescribeModelDefinition(data: V20201215.DescribeModelDefinitionRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeModelDefinitionResponse>;
  /** {@link V20201215.DescribeProduct 获取产品详情}({@link V20201215.DescribeProductRequest 请求参数}): {@link V20201215.DescribeProductResponse 返回参数} */
  DescribeProduct(data: V20201215.DescribeProductRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeProductResponse>;
  /** {@link V20201215.DescribeProductDynamicRegister 获取产品动态注册详情}({@link V20201215.DescribeProductDynamicRegisterRequest 请求参数}): {@link V20201215.DescribeProductDynamicRegisterResponse 返回参数} */
  DescribeProductDynamicRegister(data: V20201215.DescribeProductDynamicRegisterRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeProductDynamicRegisterResponse>;
  /** {@link V20201215.DescribeProducts 获取产品列表}({@link V20201215.DescribeProductsRequest 请求参数}): {@link V20201215.DescribeProductsResponse 返回参数} */
  DescribeProducts(data: V20201215.DescribeProductsRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeProductsResponse>;
  /** {@link V20201215.DescribeSDKLog 获取设备sdk日志}({@link V20201215.DescribeSDKLogRequest 请求参数}): {@link V20201215.DescribeSDKLogResponse 返回参数} */
  DescribeSDKLog(data: V20201215.DescribeSDKLogRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.DescribeSDKLogResponse>;
  /** {@link V20201215.EditFirmware 编辑固件信息}({@link V20201215.EditFirmwareRequest 请求参数}): {@link V20201215.EditFirmwareResponse 返回参数} */
  EditFirmware(data: V20201215.EditFirmwareRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.EditFirmwareResponse>;
  /** {@link V20201215.GenerateSignedVideoURL 获取视频防盗链播放URL}({@link V20201215.GenerateSignedVideoURLRequest 请求参数}): {@link V20201215.GenerateSignedVideoURLResponse 返回参数} */
  GenerateSignedVideoURL(data: V20201215.GenerateSignedVideoURLRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.GenerateSignedVideoURLResponse>;
  /** {@link V20201215.GetAllFirmwareVersion 获取所有版本列表}({@link V20201215.GetAllFirmwareVersionRequest 请求参数}): {@link V20201215.GetAllFirmwareVersionResponse 返回参数} */
  GetAllFirmwareVersion(data: V20201215.GetAllFirmwareVersionRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.GetAllFirmwareVersionResponse>;
  /** {@link V20201215.GetFirmwareURL 获取固件下载地址}({@link V20201215.GetFirmwareURLRequest 请求参数}): {@link V20201215.GetFirmwareURLResponse 返回参数} */
  GetFirmwareURL(data: V20201215.GetFirmwareURLRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.GetFirmwareURLResponse>;
  /** {@link V20201215.ImportModelDefinition 导入其它产品的数据模板}({@link V20201215.ImportModelDefinitionRequest 请求参数}): {@link V20201215.ImportModelDefinitionResponse 返回参数} */
  ImportModelDefinition(data: V20201215.ImportModelDefinitionRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ImportModelDefinitionResponse>;
  /** {@link V20201215.InheritCloudStorageUser 继承云存用户}({@link V20201215.InheritCloudStorageUserRequest 请求参数}): {@link V20201215.InheritCloudStorageUserResponse 返回参数} */
  InheritCloudStorageUser(data: V20201215.InheritCloudStorageUserRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.InheritCloudStorageUserResponse>;
  /** {@link V20201215.ListFirmwares 获取固件列表}({@link V20201215.ListFirmwaresRequest 请求参数}): {@link V20201215.ListFirmwaresResponse 返回参数} */
  ListFirmwares(data: V20201215.ListFirmwaresRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ListFirmwaresResponse>;
  /** {@link V20201215.ModifyDataForward 修改数据转发}({@link V20201215.ModifyDataForwardRequest 请求参数}): {@link V20201215.ModifyDataForwardResponse 返回参数} */
  ModifyDataForward(data: V20201215.ModifyDataForwardRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyDataForwardResponse>;
  /** {@link V20201215.ModifyDataForwardStatus 设置数据转发状态}({@link V20201215.ModifyDataForwardStatusRequest 请求参数}): {@link V20201215.ModifyDataForwardStatusResponse 返回参数} */
  ModifyDataForwardStatus(data: V20201215.ModifyDataForwardStatusRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyDataForwardStatusResponse>;
  /** {@link V20201215.ModifyDevice 修改设备信息}({@link V20201215.ModifyDeviceRequest 请求参数}): {@link V20201215.ModifyDeviceResponse 返回参数} */
  ModifyDevice(data: V20201215.ModifyDeviceRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyDeviceResponse>;
  /** {@link V20201215.ModifyDeviceLogLevel 更新设备日志级别}({@link V20201215.ModifyDeviceLogLevelRequest 请求参数}): {@link V20201215.ModifyDeviceLogLevelResponse 返回参数} */
  ModifyDeviceLogLevel(data: V20201215.ModifyDeviceLogLevelRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyDeviceLogLevelResponse>;
  /** {@link V20201215.ModifyForwardRule 修改转发规则}({@link V20201215.ModifyForwardRuleRequest 请求参数}): {@link V20201215.ModifyForwardRuleResponse 返回参数} */
  ModifyForwardRule(data: V20201215.ModifyForwardRuleRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyForwardRuleResponse>;
  /** {@link V20201215.ModifyModelDefinition 修改产品数据模板}({@link V20201215.ModifyModelDefinitionRequest 请求参数}): {@link V20201215.ModifyModelDefinitionResponse 返回参数} */
  ModifyModelDefinition(data: V20201215.ModifyModelDefinitionRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyModelDefinitionResponse>;
  /** {@link V20201215.ModifyProduct 修改产品信息}({@link V20201215.ModifyProductRequest 请求参数}): {@link V20201215.ModifyProductResponse 返回参数} */
  ModifyProduct(data: V20201215.ModifyProductRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyProductResponse>;
  /** {@link V20201215.ModifyProductDynamicRegister 修改产品动态注册}({@link V20201215.ModifyProductDynamicRegisterRequest 请求参数}): {@link V20201215.ModifyProductDynamicRegisterResponse 返回参数} */
  ModifyProductDynamicRegister(data: V20201215.ModifyProductDynamicRegisterRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ModifyProductDynamicRegisterResponse>;
  /** {@link V20201215.PublishMessage 设备透传指令控制}({@link V20201215.PublishMessageRequest 请求参数}): {@link V20201215.PublishMessageResponse 返回参数} */
  PublishMessage(data: V20201215.PublishMessageRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.PublishMessageResponse>;
  /** {@link V20201215.ReportAliveDevice 上报活跃设备}({@link V20201215.ReportAliveDeviceRequest 请求参数}): {@link V20201215.ReportAliveDeviceResponse 返回参数} */
  ReportAliveDevice(data: V20201215.ReportAliveDeviceRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ReportAliveDeviceResponse>;
  /** {@link V20201215.ResetCloudStorage 重置云存服务}({@link V20201215.ResetCloudStorageRequest 请求参数}): {@link V20201215.ResetCloudStorageResponse 返回参数} */
  ResetCloudStorage(data: V20201215.ResetCloudStorageRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.ResetCloudStorageResponse>;
  /** {@link V20201215.RetryDeviceFirmwareTask 重试设备升级任务}({@link V20201215.RetryDeviceFirmwareTaskRequest 请求参数}): {@link V20201215.RetryDeviceFirmwareTaskResponse 返回参数} */
  RetryDeviceFirmwareTask(data: V20201215.RetryDeviceFirmwareTaskRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.RetryDeviceFirmwareTaskResponse>;
  /** {@link V20201215.SetForwardAuth 设置转发权限}({@link V20201215.SetForwardAuthRequest 请求参数}): {@link V20201215.SetForwardAuthResponse 返回参数} */
  SetForwardAuth(data: V20201215.SetForwardAuthRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.SetForwardAuthResponse>;
  /** {@link V20201215.TransferCloudStorage 转移云存服务}({@link V20201215.TransferCloudStorageRequest 请求参数}): {@link V20201215.TransferCloudStorageResponse 返回参数} */
  TransferCloudStorage(data: V20201215.TransferCloudStorageRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.TransferCloudStorageResponse>;
  /** {@link V20201215.UpdateAIModelChannel 更新AI推理结果推送配置}({@link V20201215.UpdateAIModelChannelRequest 请求参数}): {@link V20201215.UpdateAIModelChannelResponse 返回参数} */
  UpdateAIModelChannel(data: V20201215.UpdateAIModelChannelRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.UpdateAIModelChannelResponse>;
  /** {@link V20201215.UploadFirmware 上传固件信息}({@link V20201215.UploadFirmwareRequest 请求参数}): {@link V20201215.UploadFirmwareResponse 返回参数} */
  UploadFirmware(data: V20201215.UploadFirmwareRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.UploadFirmwareResponse>;
  /** {@link V20201215.WakeUpDevice 设备唤醒}({@link V20201215.WakeUpDeviceRequest 请求参数}): {@link V20201215.WakeUpDeviceResponse 返回参数} */
  WakeUpDevice(data: V20201215.WakeUpDeviceRequest, config: AxiosRequestConfig & V20201215.VersionHeader): AxiosPromise<V20201215.WakeUpDeviceResponse>;
  /** {@link V20191126.ClearDeviceActiveCode 清除设备激活码}({@link V20191126.ClearDeviceActiveCodeRequest 请求参数}): {@link V20191126.ClearDeviceActiveCodeResponse 返回参数} */
  ClearDeviceActiveCode(data: V20191126.ClearDeviceActiveCodeRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.ClearDeviceActiveCodeResponse>;
  /** {@link V20191126.CreateAnonymousAccessToken 创建匿名访问Token}({@link V20191126.CreateAnonymousAccessTokenRequest 请求参数}): {@link V20191126.CreateAnonymousAccessTokenResponse 返回参数} */
  CreateAnonymousAccessToken(data: V20191126.CreateAnonymousAccessTokenRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateAnonymousAccessTokenResponse>;
  /** {@link V20191126.CreateAppUsr 终端用户注册}({@link V20191126.CreateAppUsrRequest 请求参数}): {@link V20191126.CreateAppUsrResponse 返回参数} */
  CreateAppUsr(data: V20191126.CreateAppUsrRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateAppUsrResponse>;
  /** {@link V20191126.CreateBinding 终端用户绑定设备}({@link V20191126.CreateBindingRequest 请求参数}): {@link V20191126.CreateBindingResponse 返回参数} */
  CreateBinding(data: V20191126.CreateBindingRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateBindingResponse>;
  /** {@link V20191126.CreateDevToken 终端用户临时访问设备授权}({@link V20191126.CreateDevTokenRequest 请求参数}): {@link V20191126.CreateDevTokenResponse 返回参数} */
  CreateDevToken(data: V20191126.CreateDevTokenRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateDevTokenResponse>;
  /** {@link V20191126.CreateDevices 创建设备}({@link V20191126.CreateDevicesRequest 请求参数}): {@link V20191126.CreateDevicesResponse 返回参数} */
  CreateDevices(data: V20191126.CreateDevicesRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateDevicesResponse>;
  /** {@link V20191126.CreateGencode 生成设备物模型源代码}({@link V20191126.CreateGencodeRequest 请求参数}): {@link V20191126.CreateGencodeResponse 返回参数} */
  CreateGencode(data: V20191126.CreateGencodeRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateGencodeResponse>;
  /** {@link V20191126.CreateIotDataType 创建自定义物模型数据类型}({@link V20191126.CreateIotDataTypeRequest 请求参数}): {@link V20191126.CreateIotDataTypeResponse 返回参数} */
  CreateIotDataType(data: V20191126.CreateIotDataTypeRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateIotDataTypeResponse>;
  /** {@link V20191126.CreateIotModel 定义的物模型提交}({@link V20191126.CreateIotModelRequest 请求参数}): {@link V20191126.CreateIotModelResponse 返回参数} */
  CreateIotModel(data: V20191126.CreateIotModelRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateIotModelResponse>;
  /** {@link V20191126.CreateProduct 创建产品}({@link V20191126.CreateProductRequest 请求参数}): {@link V20191126.CreateProductResponse 返回参数} */
  CreateProduct(data: V20191126.CreateProductRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateProductResponse>;
  /** {@link V20191126.CreateStorage 购买云存套餐}({@link V20191126.CreateStorageRequest 请求参数}): {@link V20191126.CreateStorageResponse 返回参数} */
  CreateStorage(data: V20191126.CreateStorageRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateStorageResponse>;
  /** {@link V20191126.CreateStorageService 购买云存服务}({@link V20191126.CreateStorageServiceRequest 请求参数}): {@link V20191126.CreateStorageServiceResponse 返回参数} */
  CreateStorageService(data: V20191126.CreateStorageServiceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateStorageServiceResponse>;
  /** {@link V20191126.CreateTraceIds 将设备加到白名单}({@link V20191126.CreateTraceIdsRequest 请求参数}): {@link V20191126.CreateTraceIdsResponse 返回参数} */
  CreateTraceIds(data: V20191126.CreateTraceIdsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateTraceIdsResponse>;
  /** {@link V20191126.CreateUploadPath 获取固件上传路径}({@link V20191126.CreateUploadPathRequest 请求参数}): {@link V20191126.CreateUploadPathResponse 返回参数} */
  CreateUploadPath(data: V20191126.CreateUploadPathRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateUploadPathResponse>;
  /** {@link V20191126.CreateUsrToken 终端用户接入授权}({@link V20191126.CreateUsrTokenRequest 请求参数}): {@link V20191126.CreateUsrTokenResponse 返回参数} */
  CreateUsrToken(data: V20191126.CreateUsrTokenRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.CreateUsrTokenResponse>;
  /** {@link V20191126.DeleteAppUsr 删除终端用户}({@link V20191126.DeleteAppUsrRequest 请求参数}): {@link V20191126.DeleteAppUsrResponse 返回参数} */
  DeleteAppUsr(data: V20191126.DeleteAppUsrRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteAppUsrResponse>;
  /** {@link V20191126.DeleteBinding 终端用户解绑设备}({@link V20191126.DeleteBindingRequest 请求参数}): {@link V20191126.DeleteBindingResponse 返回参数} */
  DeleteBinding(data: V20191126.DeleteBindingRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteBindingResponse>;
  /** {@link V20191126.DeleteDevice 删除设备}({@link V20191126.DeleteDeviceRequest 请求参数}): {@link V20191126.DeleteDeviceResponse 返回参数} */
  DeleteDevice(data: V20191126.DeleteDeviceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteDeviceResponse>;
  /** {@link V20191126.DeleteIotDataType 删除自定义物模型数据类型}({@link V20191126.DeleteIotDataTypeRequest 请求参数}): {@link V20191126.DeleteIotDataTypeResponse 返回参数} */
  DeleteIotDataType(data: V20191126.DeleteIotDataTypeRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteIotDataTypeResponse>;
  /** {@link V20191126.DeleteMessageQueue 删除产品转发消息配置}({@link V20191126.DeleteMessageQueueRequest 请求参数}): {@link V20191126.DeleteMessageQueueResponse 返回参数} */
  DeleteMessageQueue(data: V20191126.DeleteMessageQueueRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteMessageQueueResponse>;
  /** {@link V20191126.DeleteOtaVersion 删除固件版本信息}({@link V20191126.DeleteOtaVersionRequest 请求参数}): {@link V20191126.DeleteOtaVersionResponse 返回参数} */
  DeleteOtaVersion(data: V20191126.DeleteOtaVersionRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteOtaVersionResponse>;
  /** {@link V20191126.DeleteProduct 删除产品}({@link V20191126.DeleteProductRequest 请求参数}): {@link V20191126.DeleteProductResponse 返回参数} */
  DeleteProduct(data: V20191126.DeleteProductRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteProductResponse>;
  /** {@link V20191126.DeleteTraceIds 将设备从白名单删除}({@link V20191126.DeleteTraceIdsRequest 请求参数}): {@link V20191126.DeleteTraceIdsResponse 返回参数} */
  DeleteTraceIds(data: V20191126.DeleteTraceIdsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeleteTraceIdsResponse>;
  /** {@link V20191126.DeliverStorageService 将已购买的云存服务转移到另一设备}({@link V20191126.DeliverStorageServiceRequest 请求参数}): {@link V20191126.DeliverStorageServiceResponse 返回参数} */
  DeliverStorageService(data: V20191126.DeliverStorageServiceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DeliverStorageServiceResponse>;
  /** {@link V20191126.DescribeAccountBalance 查询账户余额}({@link V20191126.DescribeAccountBalanceRequest 请求参数}): {@link V20191126.DescribeAccountBalanceResponse 返回参数} */
  DescribeAccountBalance(data: V20191126.DescribeAccountBalanceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeAccountBalanceResponse>;
  /** {@link V20191126.DescribeBindDev 查询终端用户绑定的设备列表}({@link V20191126.DescribeBindDevRequest 请求参数}): {@link V20191126.DescribeBindDevResponse 返回参数} */
  DescribeBindDev(data: V20191126.DescribeBindDevRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeBindDevResponse>;
  /** {@link V20191126.DescribeBindUsr 查询设备绑定的终端用户列表}({@link V20191126.DescribeBindUsrRequest 请求参数}): {@link V20191126.DescribeBindUsrResponse 返回参数} */
  DescribeBindUsr(data: V20191126.DescribeBindUsrRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeBindUsrResponse>;
  /** {@link V20191126.DescribeDevice 获取设备信息}({@link V20191126.DescribeDeviceRequest 请求参数}): {@link V20191126.DescribeDeviceResponse 返回参数} */
  DescribeDevice(data: V20191126.DescribeDeviceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeDeviceResponse>;
  /** {@link V20191126.DescribeDeviceModel 获取设备物模型}({@link V20191126.DescribeDeviceModelRequest 请求参数}): {@link V20191126.DescribeDeviceModelResponse 返回参数} */
  DescribeDeviceModel(data: V20191126.DescribeDeviceModelRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeDeviceModelResponse>;
  /** {@link V20191126.DescribeDevices 获取设备信息列表}({@link V20191126.DescribeDevicesRequest 请求参数}): {@link V20191126.DescribeDevicesResponse 返回参数} */
  DescribeDevices(data: V20191126.DescribeDevicesRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeDevicesResponse>;
  /** {@link V20191126.DescribeIotDataType 查询自定义物模型数据类型}({@link V20191126.DescribeIotDataTypeRequest 请求参数}): {@link V20191126.DescribeIotDataTypeResponse 返回参数} */
  DescribeIotDataType(data: V20191126.DescribeIotDataTypeRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeIotDataTypeResponse>;
  /** {@link V20191126.DescribeIotModel 获取物模型定义}({@link V20191126.DescribeIotModelRequest 请求参数}): {@link V20191126.DescribeIotModelResponse 返回参数} */
  DescribeIotModel(data: V20191126.DescribeIotModelRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeIotModelResponse>;
  /** {@link V20191126.DescribeIotModels 获取物模型历史版本列表}({@link V20191126.DescribeIotModelsRequest 请求参数}): {@link V20191126.DescribeIotModelsResponse 返回参数} */
  DescribeIotModels(data: V20191126.DescribeIotModelsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeIotModelsResponse>;
  /** {@link V20191126.DescribeLogs 查询设备日志列表}({@link V20191126.DescribeLogsRequest 请求参数}): {@link V20191126.DescribeLogsResponse 返回参数} */
  DescribeLogs(data: V20191126.DescribeLogsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeLogsResponse>;
  /** {@link V20191126.DescribeMessageQueue 获取产品转发消息配置}({@link V20191126.DescribeMessageQueueRequest 请求参数}): {@link V20191126.DescribeMessageQueueResponse 返回参数} */
  DescribeMessageQueue(data: V20191126.DescribeMessageQueueRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeMessageQueueResponse>;
  /** {@link V20191126.DescribeModelDataRet 获取物模型操作结果}({@link V20191126.DescribeModelDataRetRequest 请求参数}): {@link V20191126.DescribeModelDataRetResponse 返回参数} */
  DescribeModelDataRet(data: V20191126.DescribeModelDataRetRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeModelDataRetResponse>;
  /** {@link V20191126.DescribeOsList 查看操作系统支持的芯片列表}({@link V20191126.DescribeOsListRequest 请求参数}): {@link V20191126.DescribeOsListResponse 返回参数} */
  DescribeOsList(data: V20191126.DescribeOsListRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeOsListResponse>;
  /** {@link V20191126.DescribeOtaVersions 查询固件版本信息列表}({@link V20191126.DescribeOtaVersionsRequest 请求参数}): {@link V20191126.DescribeOtaVersionsResponse 返回参数} */
  DescribeOtaVersions(data: V20191126.DescribeOtaVersionsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeOtaVersionsResponse>;
  /** {@link V20191126.DescribeProduct 获取单个产品详细信息}({@link V20191126.DescribeProductRequest 请求参数}): {@link V20191126.DescribeProductResponse 返回参数} */
  DescribeProduct(data: V20191126.DescribeProductRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeProductResponse>;
  /** {@link V20191126.DescribeProducts 获取产品列表}({@link V20191126.DescribeProductsRequest 请求参数}): {@link V20191126.DescribeProductsResponse 返回参数} */
  DescribeProducts(data: V20191126.DescribeProductsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeProductsResponse>;
  /** {@link V20191126.DescribePubVersions 获取某一产品发布过的全部固件版本}({@link V20191126.DescribePubVersionsRequest 请求参数}): {@link V20191126.DescribePubVersionsResponse 返回参数} */
  DescribePubVersions(data: V20191126.DescribePubVersionsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribePubVersionsResponse>;
  /** {@link V20191126.DescribeRechargeRecords 查询充值记录}({@link V20191126.DescribeRechargeRecordsRequest 请求参数}): {@link V20191126.DescribeRechargeRecordsResponse 返回参数} */
  DescribeRechargeRecords(data: V20191126.DescribeRechargeRecordsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeRechargeRecordsResponse>;
  /** {@link V20191126.DescribeRegistrationStatus 查询终端用户的注册状态}({@link V20191126.DescribeRegistrationStatusRequest 请求参数}): {@link V20191126.DescribeRegistrationStatusResponse 返回参数} */
  DescribeRegistrationStatus(data: V20191126.DescribeRegistrationStatusRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeRegistrationStatusResponse>;
  /** {@link V20191126.DescribeRunLog 获取设备运行日志}({@link V20191126.DescribeRunLogRequest 请求参数}): {@link V20191126.DescribeRunLogResponse 返回参数} */
  DescribeRunLog(data: V20191126.DescribeRunLogRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeRunLogResponse>;
  /** {@link V20191126.DescribeStorageService 查询云存服务}({@link V20191126.DescribeStorageServiceRequest 请求参数}): {@link V20191126.DescribeStorageServiceResponse 返回参数} */
  DescribeStorageService(data: V20191126.DescribeStorageServiceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeStorageServiceResponse>;
  /** {@link V20191126.DescribeStream 请求设备直播流地址}({@link V20191126.DescribeStreamRequest 请求参数}): {@link V20191126.DescribeStreamResponse 返回参数} */
  DescribeStream(data: V20191126.DescribeStreamRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeStreamResponse>;
  /** {@link V20191126.DescribeTraceIds 查询设备日志跟踪白名单}({@link V20191126.DescribeTraceIdsRequest 请求参数}): {@link V20191126.DescribeTraceIdsResponse 返回参数} */
  DescribeTraceIds(data: V20191126.DescribeTraceIdsRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeTraceIdsResponse>;
  /** {@link V20191126.DescribeTraceStatus 查询指定设备是否在白名单}({@link V20191126.DescribeTraceStatusRequest 请求参数}): {@link V20191126.DescribeTraceStatusResponse 返回参数} */
  DescribeTraceStatus(data: V20191126.DescribeTraceStatusRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DescribeTraceStatusResponse>;
  /** {@link V20191126.DisableDevice 禁用设备}({@link V20191126.DisableDeviceRequest 请求参数}): {@link V20191126.DisableDeviceResponse 返回参数} */
  DisableDevice(data: V20191126.DisableDeviceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DisableDeviceResponse>;
  /** {@link V20191126.DisableDeviceStream 停止设备推流}({@link V20191126.DisableDeviceStreamRequest 请求参数}): {@link V20191126.DisableDeviceStreamResponse 返回参数} */
  DisableDeviceStream(data: V20191126.DisableDeviceStreamRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DisableDeviceStreamResponse>;
  /** {@link V20191126.DisableOtaVersion 禁用固件版本}({@link V20191126.DisableOtaVersionRequest 请求参数}): {@link V20191126.DisableOtaVersionResponse 返回参数} */
  DisableOtaVersion(data: V20191126.DisableOtaVersionRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.DisableOtaVersionResponse>;
  /** {@link V20191126.ModifyDevice 修改设备信息}({@link V20191126.ModifyDeviceRequest 请求参数}): {@link V20191126.ModifyDeviceResponse 返回参数} */
  ModifyDevice(data: V20191126.ModifyDeviceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.ModifyDeviceResponse>;
  /** {@link V20191126.ModifyDeviceAction 修改设备物模型行为}({@link V20191126.ModifyDeviceActionRequest 请求参数}): {@link V20191126.ModifyDeviceActionResponse 返回参数} */
  ModifyDeviceAction(data: V20191126.ModifyDeviceActionRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.ModifyDeviceActionResponse>;
  /** {@link V20191126.ModifyDeviceProperty 修改设备物模型属性}({@link V20191126.ModifyDevicePropertyRequest 请求参数}): {@link V20191126.ModifyDevicePropertyResponse 返回参数} */
  ModifyDeviceProperty(data: V20191126.ModifyDevicePropertyRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.ModifyDevicePropertyResponse>;
  /** {@link V20191126.ModifyProduct 编辑产品信息}({@link V20191126.ModifyProductRequest 请求参数}): {@link V20191126.ModifyProductResponse 返回参数} */
  ModifyProduct(data: V20191126.ModifyProductRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.ModifyProductResponse>;
  /** {@link V20191126.ModifyVerContent 编辑版本描述信息}({@link V20191126.ModifyVerContentRequest 请求参数}): {@link V20191126.ModifyVerContentResponse 返回参数} */
  ModifyVerContent(data: V20191126.ModifyVerContentRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.ModifyVerContentResponse>;
  /** {@link V20191126.RefundStorageService 退订已购买的云存服务}({@link V20191126.RefundStorageServiceRequest 请求参数}): {@link V20191126.RefundStorageServiceResponse 返回参数} */
  RefundStorageService(data: V20191126.RefundStorageServiceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.RefundStorageServiceResponse>;
  /** {@link V20191126.RunDevice 启用设备}({@link V20191126.RunDeviceRequest 请求参数}): {@link V20191126.RunDeviceResponse 返回参数} */
  RunDevice(data: V20191126.RunDeviceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.RunDeviceResponse>;
  /** {@link V20191126.RunDeviceStream 开启设备推流}({@link V20191126.RunDeviceStreamRequest 请求参数}): {@link V20191126.RunDeviceStreamResponse 返回参数} */
  RunDeviceStream(data: V20191126.RunDeviceStreamRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.RunDeviceStreamResponse>;
  /** {@link V20191126.RunIotModel 定义的物模型发布}({@link V20191126.RunIotModelRequest 请求参数}): {@link V20191126.RunIotModelResponse 返回参数} */
  RunIotModel(data: V20191126.RunIotModelRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.RunIotModelResponse>;
  /** {@link V20191126.RunOtaVersion 固件版本正式发布}({@link V20191126.RunOtaVersionRequest 请求参数}): {@link V20191126.RunOtaVersionResponse 返回参数} */
  RunOtaVersion(data: V20191126.RunOtaVersionRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.RunOtaVersionResponse>;
  /** {@link V20191126.RunTestOtaVersion 固件版本测试发布}({@link V20191126.RunTestOtaVersionRequest 请求参数}): {@link V20191126.RunTestOtaVersionResponse 返回参数} */
  RunTestOtaVersion(data: V20191126.RunTestOtaVersionRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.RunTestOtaVersionResponse>;
  /** {@link V20191126.SendOnlineMsg 向设备发送在线消息}({@link V20191126.SendOnlineMsgRequest 请求参数}): {@link V20191126.SendOnlineMsgResponse 返回参数} */
  SendOnlineMsg(data: V20191126.SendOnlineMsgRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.SendOnlineMsgResponse>;
  /** {@link V20191126.SetMessageQueue 配置产品转发消息队列}({@link V20191126.SetMessageQueueRequest 请求参数}): {@link V20191126.SetMessageQueueResponse 返回参数} */
  SetMessageQueue(data: V20191126.SetMessageQueueRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.SetMessageQueueResponse>;
  /** {@link V20191126.UpgradeDevice 设备固件升级}({@link V20191126.UpgradeDeviceRequest 请求参数}): {@link V20191126.UpgradeDeviceResponse 返回参数} */
  UpgradeDevice(data: V20191126.UpgradeDeviceRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.UpgradeDeviceResponse>;
  /** {@link V20191126.UploadOtaVersion 接收上传到控制台的固件版本信息}({@link V20191126.UploadOtaVersionRequest 请求参数}): {@link V20191126.UploadOtaVersionResponse 返回参数} */
  UploadOtaVersion(data: V20191126.UploadOtaVersionRequest, config: AxiosRequestConfig & V20191126.VersionHeader): AxiosPromise<V20191126.UploadOtaVersionResponse>;
}

export declare type Versions = ["2021-11-25", "2020-12-15", "2019-11-26"];

export default Iotvideo;
