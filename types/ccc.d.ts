/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 外呼任务被叫信息 */
declare interface AutoCalloutTaskCalleeInfo {
  /** 被叫号码 */
  Callee: string;
  /** 呼叫状态 0初始 1已接听 2未接听 3呼叫中 4待重试 */
  State: number;
  /** 会话ID列表 */
  Sessions: string[];
}

/** 自动外呼任务列表项 */
declare interface AutoCalloutTaskInfo {
  /** 任务名 */
  Name: string;
  /** 被叫数量 */
  CalleeCount: number;
  /** 主叫号码列表 */
  Callers: string[];
  /** 起始时间戳 */
  NotBefore: number;
  /** 结束时间戳 */
  NotAfter: number | null;
  /** 任务使用的IvrId */
  IvrId: number;
  /** 任务状态0初始 1运行中 2已完成 3结束中 4已结束 */
  State: number;
  /** 任务Id */
  TaskId: number;
}

/** 呼入实时指标 */
declare interface CallInMetrics {
  /** IVR驻留数量 */
  IvrCount: number;
  /** 排队中数量 */
  QueueCount: number;
  /** 振铃中数量 */
  RingCount: number;
  /** 接通中数量 */
  AcceptCount: number;
  /** 客服转接外线中数量 */
  TransferOuterCount: number;
  /** 最大排队时长 */
  MaxQueueDuration: number;
  /** 平均排队时长 */
  AvgQueueDuration: number;
  /** 最大振铃时长 */
  MaxRingDuration: number;
  /** 平均振铃时长 */
  AvgRingDuration: number;
  /** 最大接通时长 */
  MaxAcceptDuration: number;
  /** 平均接通时长 */
  AvgAcceptDuration: number;
}

/** 呼入线路维度相关指标 */
declare interface CallInNumberMetrics {
  /** 线路号码 */
  Number: string;
  /** 线路相关指标 */
  Metrics: CallInMetrics;
  /** 所属技能组相关指标 */
  SkillGroupMetrics: CallInSkillGroupMetrics[];
}

/** 呼入技能组相关指标 */
declare interface CallInSkillGroupMetrics {
  /** 技能组ID */
  SkillGroupId: number;
  /** 数据指标 */
  Metrics: CallInMetrics;
  /** 技能组名称 */
  Name: string;
}

/** 批量添加客服时，返回出错客服的像个信息 */
declare interface ErrStaffItem {
  /** 坐席邮箱地址 */
  StaffEmail: string;
  /** 错误码 */
  Code: string;
  /** 错误描述 */
  Message: string;
}

/** 文本会话服务记录信息 */
declare interface IMCdrInfo {
  /** 服务记录ID */
  Id: string;
  /** 服务时长秒数 */
  Duration: number;
  /** 结束状态0 异常结束1 正常结束3 无坐席在线17 坐席放弃接听100 黑名单101 坐席手动转接102 IVR阶段放弃108 用户超时自动结束 */
  EndStatus: number;
  /** 用户昵称 */
  Nickname: string;
  /** 服务类型 1为全媒体，2为文本客服 */
  Type: number;
  /** 客服ID */
  StaffId: string;
  /** 服务时间戳 */
  Timestamp: number;
  /** 会话ID */
  SessionId: string | null;
  /** 技能组ID */
  SkillGroupId: string | null;
  /** 技能组名称 */
  SkillGroupName: string | null;
}

/** ivr 按键信息 */
declare interface IVRKeyPressedElement {
  /** 按键 */
  Key: string | null;
  /** 按键关联的标签 */
  Label: string | null;
}

/** 单条消息 */
declare interface Message {
  /** 消息类型 */
  Type: string;
  /** 消息内容 */
  Content: string;
}

/** 聊天消息 */
declare interface MessageBody {
  /** 消息时间戳 */
  Timestamp: number;
  /** 发消息的用户ID */
  From: string;
  /** 消息列表 */
  Messages: Message[];
}

/** PSTN 会话类型。 */
declare interface PSTNSession {
  /** 会话 ID */
  SessionID: string;
  /** 会话临时房间 ID */
  RoomID: string;
  /** 主叫 */
  Caller: string;
  /** 被叫 */
  Callee: string;
  /** 开始时间，Unix 时间戳 */
  StartTimestamp: number;
  /** 振铃时间，Unix 时间戳 */
  RingTimestamp: number;
  /** 接听时间，Unix 时间戳 */
  AcceptTimestamp: number;
  /** 坐席邮箱 */
  StaffEmail: string;
  /** 坐席工号 */
  StaffNumber: string;
  /** 会话状态ringing 振铃中seatJoining 等待坐席接听inProgress 进行中finished 已完成 */
  SessionStatus: string;
  /** 会话呼叫方向， 0 呼入 | 1 - 呼出 */
  Direction: number;
  /** 转外线使用的号码（转外线主叫） */
  OutBoundCaller: string;
  /** 转外线被叫 */
  OutBoundCallee: string;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller: string;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee: string;
}

/** PSTN 会话信息 */
declare interface PSTNSessionInfo {
  /** 会话 ID */
  SessionID: string;
  /** 会话临时房间 ID */
  RoomID: string;
  /** 主叫 */
  Caller: string;
  /** 被叫 */
  Callee: string;
  /** 开始时间，Unix 时间戳 */
  StartTimestamp: string;
  /** 接听时间，Unix 时间戳 */
  AcceptTimestamp: string;
  /** 坐席邮箱 */
  StaffEmail: string;
  /** 坐席工号 */
  StaffNumber: string;
  /** 坐席状态 inProgress 进行中 */
  SessionStatus: string;
  /** 会话呼叫方向， 0 呼入 | 1 - 呼出 */
  Direction: number;
  /** 振铃时间，Unix 时间戳 */
  RingTimestamp: number;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller: string;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee: string;
}

/** 套餐包购买信息 */
declare interface PackageBuyInfo {
  /** 套餐包Id */
  PackageId: string;
  /** 套餐包类型，0-外呼套餐包|1-400呼入套餐包 */
  Type: number;
  /** 套餐包总量 */
  CapacitySize: number;
  /** 套餐包剩余量 */
  CapacityRemain: number;
  /** 购买时间戳 */
  BuyTime: number;
  /** 截至时间戳 */
  EndTime: number;
}

/** 号码购买信息 */
declare interface PhoneNumBuyInfo {
  /** 电话号码 */
  PhoneNum: string;
  /** 号码类型，0-固话|1-虚商号码|2-运营商号码|3-400号码 */
  Type: number;
  /** 号码呼叫类型，1-呼入|2-呼出|3-呼入呼出 */
  CallType: number;
  /** 购买时间戳 */
  BuyTime: number;
  /** 截至时间戳 */
  EndTime: number;
  /** 号码状态，1正常|2欠费停用|4管理员停用|5违规停用 */
  State: number;
}

/** 应用购买信息 */
declare interface SdkAppIdBuyInfo {
  /** 应用ID */
  SdkAppId: number;
  /** 应用名称 */
  Name: string;
  /** 坐席购买数（还在有效期内） */
  StaffBuyNum: number;
  /** 坐席购买列表 （还在有效期内） */
  StaffBuyList: StaffBuyInfo[];
  /** 号码购买列表 */
  PhoneNumBuyList: PhoneNumBuyInfo[];
}

/** 坐席用户信息 */
declare interface SeatUserInfo {
  /** 坐席名称 */
  Name?: string;
  /** 坐席邮箱 */
  Mail?: string;
  /** 坐席电话号码（带0086前缀） */
  Phone?: string;
  /** 坐席昵称 */
  Nick?: string;
  /** 用户ID */
  UserId?: string;
  /** 坐席关联的技能组列表 */
  SkillGroupNameList?: string[] | null;
  /** 工号 */
  StaffNumber?: string | null;
}

/** 参与者信息 */
declare interface ServeParticipant {
  /** 坐席邮箱 */
  Mail: string | null;
  /** 坐席电话 */
  Phone: string | null;
  /** 振铃时间戳，Unix 秒级时间戳 */
  RingTimestamp: number | null;
  /** 接听时间戳，Unix 秒级时间戳 */
  AcceptTimestamp: number | null;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndedTimestamp: number | null;
  /** 录音 ID，能够索引到坐席侧的录音 */
  RecordId: string | null;
  /** 参与者类型，"staffSeat", "outboundSeat", "staffPhoneSeat" */
  Type: string | null;
  /** 转接来源坐席信息 */
  TransferFrom: string | null;
  /** 转接去向坐席信息 */
  TransferTo: string | null;
  /** 转接去向参与者类型，取值与 Type 一致 */
  TransferToType: string | null;
  /** 技能组 ID */
  SkillGroupId: number | null;
  /** 结束状态 */
  EndStatusString: string | null;
  /** 录音 URL */
  RecordURL: string | null;
  /** 参与者序号，从 0 开始 */
  Sequence: number | null;
  /** 开始时间戳，Unix 秒级时间戳 */
  StartTimestamp: number | null;
  /** 技能组名称 */
  SkillGroupName: string | null;
  /** 录音转存第三方COS地址 */
  CustomRecordURL: string | null;
}

/** 技能组信息 */
declare interface SkillGroupInfoItem {
  /** 技能组ID */
  SkillGroupId: number;
  /** 技能组名称 */
  SkillGroupName: string;
  /** 类型：IM、TEL、ALL（全媒体） */
  Type: string;
  /** 会话分配策略 */
  RoutePolicy: string | null;
  /** 会话分配是否优先上次服务坐席 */
  UsingLastSeat: number | null;
  /** 单客服最大并发数（电话类型默认1） */
  MaxConcurrency: number | null;
  /** 最后修改时间 */
  LastModifyTimestamp: number | null;
}

/** 技能组信息 */
declare interface SkillGroupItem {
  /** 技能组ID */
  SkillGroupId: number;
  /** 技能组名称 */
  SkillGroupName: string;
  /** 优先级 */
  Priority: number;
  /** 类型：IM、TEL、ALL（全媒体） */
  Type: string;
}

/** 坐席购买信息 */
declare interface StaffBuyInfo {
  /** 购买坐席数量 */
  Num: number;
  /** 购买时间戳 */
  BuyTime: number;
  /** 截至时间戳 */
  EndTime: number;
}

/** 带有技能组优先级的坐席信息 */
declare interface StaffInfo {
  /** 坐席名称 */
  Name: string | null;
  /** 坐席邮箱 */
  Mail: string;
  /** 坐席电话号码 */
  Phone: string | null;
  /** 坐席昵称 */
  Nick: string | null;
  /** 坐席工号 */
  StaffNumber: string | null;
  /** 所属技能组列表 */
  SkillGroupList: SkillGroupItem[] | null;
  /** 最后修改时间 */
  LastModifyTimestamp: number | null;
}

/** 坐席状态补充信息 */
declare interface StaffStatusExtra {
  /** im - 文本 | tel - 电话 | all - 全媒体 */
  Type: string;
  /** in - 呼入 | out - 呼出 */
  Direct: string;
}

/** 坐席状态相关信息 */
declare interface StaffStatusMetrics {
  /** 坐席邮箱 */
  Email: string;
  /** 坐席状态 free 示闲 | busy 忙碌 | rest 小休 | notReady 示忙 | afterCallWork 话后调整 | offline 离线 */
  Status: string;
  /** 坐席状态补充信息 */
  StatusExtra: StaffStatusExtra;
  /** 当天在线总时长 */
  OnlineDuration: number;
  /** 当天示闲总时长 */
  FreeDuration: number;
  /** 当天忙碌总时长 */
  BusyDuration: number;
  /** 当天示忙总时长 */
  NotReadyDuration: number;
  /** 当天小休总时长 */
  RestDuration: number;
  /** 当天话后调整总时长 */
  AfterCallWorkDuration: number;
  /** 小休原因 */
  Reason: string;
  /** 是否预约小休 */
  ReserveRest: boolean;
  /** 是否预约示忙 */
  ReserveNotReady: boolean;
  /** 手机接听模式： 0 - 关闭 | 1 - 仅离线 | 2- 始终 */
  UseMobileAccept: number;
  /** 手机外呼开关 */
  UseMobileCallOut: boolean;
}

/** 电话话单信息 */
declare interface TelCdrInfo {
  /** 主叫号码 */
  Caller: string;
  /** 被叫号码 */
  Callee: string;
  /** 呼叫发起时间戳，Unix 时间戳 */
  Time: number;
  /** 呼入呼出方向 0 呼入 1 呼出 */
  Direction: number;
  /** 通话时长 */
  Duration: number;
  /** 录音信息 */
  RecordURL: string;
  /** 坐席信息 */
  SeatUser: SeatUserInfo;
  /** 结束状态0	错误1	正常结束2	未接通17	坐席未接100	黑名单101	坐席转接102	IVR 期间用户放弃103	会话排队期间用户放弃104	会话振铃期间用户放弃105	无坐席在线106	非工作时间107	IVR后直接结束201	未知状态202	未接听203	拒接挂断204	关机205	空号206	通话中207	欠费208	运营商线路异常209	主叫取消210	不在服务区 */
  EndStatus: number;
  /** 技能组名称 */
  SkillGroup: string;
  /** 主叫归属地 */
  CallerLocation: string;
  /** IVR 阶段耗时 */
  IVRDuration: number | null;
  /** 振铃时间戳，UNIX 秒级时间戳 */
  RingTimestamp: number | null;
  /** 接听时间戳，UNIX 秒级时间戳 */
  AcceptTimestamp: number | null;
  /** 结束时间戳，UNIX 秒级时间戳 */
  EndedTimestamp: number | null;
  /** IVR 按键信息 ，e.g. ["1","2","3"] */
  IVRKeyPressed: string[] | null;
  /** 挂机方 seat 坐席 user 用户 */
  HungUpSide: string | null;
  /** 服务参与者列表 */
  ServeParticipants: ServeParticipant[] | null;
  /** 技能组ID */
  SkillGroupId: number | null;
  /** error 错误ok 正常结束unconnected 未接通seatGiveUp 坐席未接blackList 黑名单seatForward 坐席转接ivrGiveUp IVR 期间用户放弃waitingGiveUp 会话排队期间用户放弃ringingGiveUp 会话振铃期间用户放弃noSeatOnline 无坐席在线notWorkTime 非工作时间ivrEnd IVR后直接结束unknown 未知状态notAnswer 未接听userReject 拒接挂断powerOff 关机numberNotExist 空号busy 通话中outOfCredit 欠费operatorError 运营商线路异常callerCancel 主叫取消notInService 不在服务区 */
  EndStatusString: string | null;
  /** 会话开始时间戳，UNIX 秒级时间戳 */
  StartTimestamp: number | null;
  /** 进入排队时间，Unix 秒级时间戳 */
  QueuedTimestamp: number | null;
  /** 后置IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]） */
  PostIVRKeyPressed: IVRKeyPressedElement[] | null;
  /** 排队技能组Id */
  QueuedSkillGroupId: number | null;
  /** 会话 ID */
  SessionId: string | null;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller: string | null;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee: string | null;
  /** 客户自定义数据（User-to-User Interface） */
  Uui: string | null;
  /** IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]） */
  IVRKeyPressedEx: IVRKeyPressedElement[] | null;
  /** 获取录音ASR文本信息地址 */
  AsrUrl: string | null;
  /** 录音转存第三方COS地址 */
  CustomRecordURL: string | null;
}

declare interface BindStaffSkillGroupListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 坐席邮箱 */
  StaffEmail: string;
  /** 绑定技能组列表 */
  SkillGroupList: number[];
}

declare interface BindStaffSkillGroupListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAutoCalloutTaskRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务起始时间戳，Unix 秒级时间戳 */
  NotBefore: number;
  /** 被叫号码列表 */
  Callees: string[];
  /** 主叫号码列表 */
  Callers: string[];
  /** 呼叫使用的Ivr */
  IvrId: number;
  /** 任务名 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 任务停止时间戳，Unix 秒级时间戳 */
  NotAfter?: number;
  /** 最大尝试次数 */
  Tries?: number;
}

declare interface CreateAutoCalloutTaskResponse {
  /** 任务Id */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCCCSkillGroupRequest {
  /** 应用 ID（必填） */
  SdkAppId: number;
  /** 技能组名称 */
  SkillGroupName: string;
  /** 技能组类型0-电话，1-在线，3-音频，4-视频 */
  SkillGroupType: number;
  /** 技能组接待人数上限（该技能组中1个座席可接待的人数上限）默认为1。1、若技能组类型为在线，则接待上限可设置为1及以上2、若技能组类型为电话、音频、视频，则接待上线必须只能为1 */
  MaxConcurrency?: number;
}

declare interface CreateCCCSkillGroupResponse {
  /** 技能组ID */
  SkillGroupId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCallOutSessionRequest {
  /** 应用 ID */
  SdkAppId: number;
  /** 客服用户 ID，一般为客服邮箱 */
  UserId: string;
  /** 被叫号码，须带 0086 前缀 */
  Callee: string;
  /** 主叫号码，须带 0086 前缀 */
  Caller?: string;
  /** 是否强制使用手机外呼，当前只支持 true，若为 true 请确保已配置白名单 */
  IsForceUseMobile?: boolean;
  /** 自定义数据，长度限制 1024 字节 */
  Uui?: string;
}

declare interface CreateCallOutSessionResponse {
  /** 新创建的会话 ID */
  SessionId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSDKLoginTokenRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 坐席账号。 */
  SeatUserId: string;
}

declare interface CreateSDKLoginTokenResponse {
  /** SDK 登录 Token。 */
  Token: string;
  /** 过期时间戳，Unix 时间戳。 */
  ExpiredTime: number;
  /** SDK 加载路径会随着 SDK 的发布而变动。 */
  SdkURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateStaffRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 客服信息，个数不超过 10 */
  Staffs: SeatUserInfo[];
}

declare interface CreateStaffResponse {
  /** 错误坐席列表及错误信息 */
  ErrorStaffList: ErrStaffItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserSigRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 用户 ID */
  Uid: string;
  /** 有效期，单位秒，不超过 1 小时 */
  ExpiredTime: number;
  /** 用户签名数据 */
  ClientData?: string;
}

declare interface CreateUserSigResponse {
  /** 签名结果 */
  UserSig: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteStaffRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 待删除客服邮箱列表 */
  StaffList: string[];
}

declare interface DeleteStaffResponse {
  /** 无法删除的状态为在线的客服列表 */
  OnlineStaffList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAutoCalloutTaskRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务Id */
  TaskId: number;
}

declare interface DescribeAutoCalloutTaskResponse {
  /** 任务名 */
  Name: string;
  /** 任务描述 */
  Description: string;
  /** 任务起始时间戳 */
  NotBefore: number;
  /** 任务结束时间戳 */
  NotAfter: number | null;
  /** 主叫列表 */
  Callers: string[];
  /** 被叫信息列表 */
  Callees: AutoCalloutTaskCalleeInfo[];
  /** 任务使用的IvrId */
  IvrId: number;
  /** 任务状态 0初始 1运行中 2已完成 3结束中 4已终止 */
  State: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAutoCalloutTasksRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页大小 */
  PageSize: number;
  /** 页数 */
  PageNumber: number;
}

declare interface DescribeAutoCalloutTasksResponse {
  /** 总数 */
  TotalCount: number;
  /** 任务列表 */
  Tasks: AutoCalloutTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCCCBuyInfoListRequest {
  /** 应用ID列表，不传时查询所有应用 */
  SdkAppIds?: number[];
}

declare interface DescribeCCCBuyInfoListResponse {
  /** 应用总数 */
  TotalCount: number;
  /** 应用购买信息列表 */
  SdkAppIdBuyList: SdkAppIdBuyInfo[];
  /** 套餐包购买信息列表 */
  PackageBuyList: PackageBuyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCallInMetricsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 是否返回技能组维度信息，默认“是” */
  EnabledSkillGroup?: boolean;
  /** 是否返回线路维度信息，默认“否” */
  EnabledNumber?: boolean;
}

declare interface DescribeCallInMetricsResponse {
  /** 时间戳 */
  Timestamp: number;
  /** 总体指标 */
  TotalMetrics: CallInMetrics;
  /** 线路维度指标 */
  NumberMetrics: CallInNumberMetrics[] | null;
  /** 技能组维度指标 */
  SkillGroupMetrics: CallInSkillGroupMetrics[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeChatMessagesRequest {
  /** 实例 ID（废弃） */
  InstanceId?: number;
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId?: number;
  /** 服务记录ID */
  CdrId?: string;
  /** 返回记录条数 最大为100默认20 */
  Limit?: number;
  /** 返回记录偏移 默认为0 */
  Offset?: number;
  /** 1为从早到晚，2为从晚到早，默认为2 */
  Order?: number;
  /** 服务记录SessionID */
  SessionId?: string;
}

declare interface DescribeChatMessagesResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 消息列表 */
  Messages: MessageBody[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIMCdrsRequest {
  /** 起始时间 */
  StartTimestamp: number;
  /** 结束时间 */
  EndTimestamp: number;
  /** 实例 ID（废弃） */
  InstanceId?: number;
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId?: number;
  /** 返回记录条数 最大为100默认20 */
  Limit?: number;
  /** 返回记录偏移 默认为0 */
  Offset?: number;
  /** 1为全媒体，2为文本客服，不填则查询全部 */
  Type?: number;
}

declare interface DescribeIMCdrsResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 服务记录列表 */
  IMCdrs: IMCdrInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePSTNActiveSessionListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 数据偏移 */
  Offset: number;
  /** 返回的数据条数，最大 25 */
  Limit: number;
}

declare interface DescribePSTNActiveSessionListResponse {
  /** 列表总条数 */
  Total: number;
  /** 列表内容 */
  Sessions: PSTNSessionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProtectedTelCdrRequest {
  /** 起始时间戳，Unix 秒级时间戳 */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndTimeStamp: number;
  /** 应用 ID，可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 100 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
}

declare interface DescribeProtectedTelCdrResponse {
  /** 话单记录总数 */
  TotalCount: number;
  /** 话单记录 */
  TelCdrs: TelCdrInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSkillGroupInfoListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 100 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 技能组ID，查询单个技能组时使用 */
  SkillGroupId?: number;
  /** 查询修改时间大于等于ModifiedTime的技能组时使用 */
  ModifiedTime?: number;
  /** 技能组名称 */
  SkillGroupName?: string;
}

declare interface DescribeSkillGroupInfoListResponse {
  /** 技能组总数 */
  TotalCount: number;
  /** 技能组信息列表 */
  SkillGroupList: SkillGroupInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStaffInfoListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 9999 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 坐席账号，查询单个坐席时使用 */
  StaffMail?: string;
  /** 查询修改时间大于等于ModifiedTime的坐席时使用 */
  ModifiedTime?: number;
  /** 技能组ID */
  SkillGroupId?: number;
}

declare interface DescribeStaffInfoListResponse {
  /** 坐席用户总数 */
  TotalCount: number;
  /** 坐席用户信息列表 */
  StaffList: StaffInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStaffStatusMetricsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 筛选坐席列表，默认不传返回全部坐席信息 */
  StaffList?: string[];
}

declare interface DescribeStaffStatusMetricsResponse {
  /** 坐席状态实时信息 */
  Metrics: StaffStatusMetrics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTelCallInfoRequest {
  /** 起始时间戳，Unix 时间戳 */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 时间戳，查询时间范围最大为90天 */
  EndTimeStamp: number;
  /** 应用ID列表，多个ID时，返回值为多个ID使用总和 */
  SdkAppIdList: number[];
}

declare interface DescribeTelCallInfoResponse {
  /** 呼出套餐包消耗分钟数 */
  TelCallOutCount: number;
  /** 呼入套餐包消耗分钟数 */
  TelCallInCount: number;
  /** 坐席使用统计个数 */
  SeatUsedCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTelCdrRequest {
  /** 起始时间戳，Unix 秒级时间戳 */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndTimeStamp: number;
  /** 实例 ID（废弃） */
  InstanceId?: number;
  /** 返回数据条数，上限（废弃） */
  Limit?: number;
  /** 偏移（废弃） */
  Offset?: number;
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId?: number;
  /** 分页尺寸（必填），上限 100 */
  PageSize?: number;
  /** 分页页码（必填），从 0 开始 */
  PageNumber?: number;
  /** 按手机号筛选 */
  Phones?: string[];
  /** 按SessionId筛选 */
  SessionIds?: string[];
}

declare interface DescribeTelCdrResponse {
  /** 话单记录总数 */
  TotalCount: number;
  /** 话单记录 */
  TelCdrs: TelCdrInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTelSessionRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 会话 ID */
  SessionId: string;
}

declare interface DescribeTelSessionResponse {
  /** 会话信息 */
  Session: PSTNSession;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableCCCPhoneNumberRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 号码列表，0086开头 */
  PhoneNumbers: string[];
  /** 停用开关，0启用 1停用 */
  Disabled: number;
}

declare interface DisableCCCPhoneNumberResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyStaffRequest {
  /** 应用ID */
  SdkAppId: number;
  /** 坐席账户 */
  Email: string;
  /** 坐席名称 */
  Name?: string;
  /** 坐席手机号（带0086前缀,示例：008618011111111） */
  Phone?: string;
  /** 坐席昵称 */
  Nick?: string;
  /** 绑定技能组ID列表 */
  SkillGroupIds?: number[];
  /** 是否开启手机外呼开关 */
  UseMobileCallOut?: boolean;
  /** 手机接听模式 0 - 关闭 | 1 - 仅离线 | 2 - 始终 */
  UseMobileAccept?: number;
}

declare interface ModifyStaffResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopAutoCalloutTaskRequest {
  /** 呼叫中心实例Id */
  SdkAppId: number;
  /** 任务Id */
  TaskId: number;
}

declare interface StopAutoCalloutTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindStaffSkillGroupListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 客服邮箱 */
  StaffEmail: string;
  /** 解绑技能组列表 */
  SkillGroupList: number[];
}

declare interface UnbindStaffSkillGroupListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 云呼叫中心 */
declare interface Ccc {
  (): Versions;
  /** 绑定坐席所属技能组 */
  BindStaffSkillGroupList(data: BindStaffSkillGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<BindStaffSkillGroupListResponse>;
  /** 创建自动外呼任务 */
  CreateAutoCalloutTask(data: CreateAutoCalloutTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoCalloutTaskResponse>;
  /** 创建技能组 */
  CreateCCCSkillGroup(data: CreateCCCSkillGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCCCSkillGroupResponse>;
  /** 创建外呼会话（当前仅支持双呼） */
  CreateCallOutSession(data: CreateCallOutSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCallOutSessionResponse>;
  /** 创建 SDK 登录 Token */
  CreateSDKLoginToken(data: CreateSDKLoginTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSDKLoginTokenResponse>;
  /** 创建客服账号 */
  CreateStaff(data: CreateStaffRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStaffResponse>;
  /** 创建用户数据签名 */
  CreateUserSig(data: CreateUserSigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserSigResponse>;
  /** 删除坐席信息 */
  DeleteStaff(data: DeleteStaffRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStaffResponse>;
  /** 查询自动外呼任务详情 */
  DescribeAutoCalloutTask(data: DescribeAutoCalloutTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoCalloutTaskResponse>;
  /** 批量查询自动任务外呼 */
  DescribeAutoCalloutTasks(data: DescribeAutoCalloutTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoCalloutTasksResponse>;
  /** 获取用户购买信息列表 */
  DescribeCCCBuyInfoList(data: DescribeCCCBuyInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCCBuyInfoListResponse>;
  /** 获取呼入实时数据统计指标 */
  DescribeCallInMetrics(data: DescribeCallInMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallInMetricsResponse>;
  /** 查询服务的聊天记录 */
  DescribeChatMessages(data: DescribeChatMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChatMessagesResponse>;
  /** 查询在线客服记录 */
  DescribeIMCdrs(data: DescribeIMCdrsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIMCdrsResponse>;
  /** 获取 PSTN 活动会话列表 */
  DescribePSTNActiveSessionList(data: DescribePSTNActiveSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePSTNActiveSessionListResponse>;
  /** 获取主被叫受保护的电话服务记录与录音 */
  DescribeProtectedTelCdr(data: DescribeProtectedTelCdrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectedTelCdrResponse>;
  /** 获取技能组信息列表 */
  DescribeSkillGroupInfoList(data: DescribeSkillGroupInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillGroupInfoListResponse>;
  /** 获取坐席信息列表 */
  DescribeStaffInfoList(data: DescribeStaffInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStaffInfoListResponse>;
  /** 获取坐席实时状态统计指标 */
  DescribeStaffStatusMetrics(data: DescribeStaffStatusMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStaffStatusMetricsResponse>;
  /** 按实例获取电话消耗统计 */
  DescribeTelCallInfo(data: DescribeTelCallInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelCallInfoResponse>;
  /** 获取电话服务记录与录音 */
  DescribeTelCdr(data: DescribeTelCdrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelCdrResponse>;
  /** 获取 PSTN 会话信息 */
  DescribeTelSession(data: DescribeTelSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelSessionResponse>;
  /** 停用号码 */
  DisableCCCPhoneNumber(data: DisableCCCPhoneNumberRequest, config?: AxiosRequestConfig): AxiosPromise<DisableCCCPhoneNumberResponse>;
  /** 修改客服账号 */
  ModifyStaff(data: ModifyStaffRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStaffResponse>;
  /** 停止自动外呼任务 */
  StopAutoCalloutTask(data: StopAutoCalloutTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopAutoCalloutTaskResponse>;
  /** 解绑坐席所属技能组 */
  UnbindStaffSkillGroupList(data: UnbindStaffSkillGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindStaffSkillGroupListResponse>;
}

export declare type Versions = ["2020-02-10"];

export default Ccc;
