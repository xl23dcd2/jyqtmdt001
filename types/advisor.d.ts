/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 评估项警告条件 */
declare interface Conditions {
  /** 警告条件ID */
  ConditionId: number | null;
  /** 警告级别，2:中风险，3:高风险 */
  Level: number | null;
  /** 警告级别描述 */
  LevelDesc: string | null;
  /** 警告条件描述 */
  Desc: string;
}

/** 键值对 */
declare interface KeyValue {
  /** 键名 */
  Key?: string;
  /** 键名对应值 */
  Value?: string;
}

/** 风险实例字段描述 */
declare interface RiskFieldsDesc {
  /** 字段ID */
  Field: string;
  /** 字段名称 */
  FieldName: string;
  /** 字段类型, string: 字符串类型，例如"aa"int: 整形，例如 111stringSlice : 字符串数组类型，例如["a", "b"]tags: 标签类型, 例如: [{"Key":"kkk","Value":"vvv"},{"Key":"kkk2","Value":"vvv2"}] */
  FieldType: string;
  /** 字段值对应字典 */
  FieldDict: KeyValue[] | null;
}

/** 评估项信息 */
declare interface Strategies {
  /** 评估项ID */
  StrategyId?: number | null;
  /** 评估项名称 */
  Name?: string | null;
  /** 评估项描述 */
  Desc?: string | null;
  /** 评估项对应产品ID */
  Product?: string | null;
  /** 评估项对应产品名称 */
  ProductDesc?: string | null;
  /** 评估项优化建议 */
  Repair?: string | null;
  /** 评估项类别ID */
  GroupId?: number | null;
  /** 评估项类别名称 */
  GroupName?: string | null;
  /** 评估项风险列表 */
  Conditions?: Conditions[] | null;
}

declare interface DescribeStrategiesRequest {
}

declare interface DescribeStrategiesResponse {
  /** 评估项列表 */
  Strategies?: Strategies[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStrategyRisksRequest {
  /** 评估项ID */
  StrategyId: number;
  /** 返回数量,默认值为100,最大值为200 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 环境 */
  Env?: string;
  /** 任务类型 */
  TaskType?: string;
}

declare interface DescribeTaskStrategyRisksResponse {
  /** 根据此配置，匹配风险实例列表（Risks）对应字段，例如:{"Response":{"RequestId":"111","RiskFieldsDesc":[{"Field":"InstanceId","FieldName":"ID","FieldType":"string","FieldDict":{}},{"Field":"InstanceName","FieldName":"名称","FieldType":"string","FieldDict":{}},{"Field":"InstanceState","FieldName":"状态","FieldType":"string","FieldDict":{"LAUNCH_FAILED":"创建失败","PENDING":"创建中","REBOOTING":"重启中","RUNNING":"运行中","SHUTDOWN":"停止待销毁","STARTING":"开机中","STOPPED":"关机","STOPPING":"关机中","TERMINATING":"销毁中"}},{"Field":"Zone","FieldName":"可用区","FieldType":"string","FieldDict":{}},{"Field":"PrivateIPAddresses","FieldName":"IP地址(内)","FieldType":"stringSlice","FieldDict":{}},{"Field":"PublicIPAddresses","FieldName":"IP地址(公)","FieldType":"stringSlice","FieldDict":{}},{"Field":"Region","FieldName":"地域","FieldType":"string","FieldDict":{}},{"Field":"Tags","FieldName":"标签","FieldType":"tags","FieldDict":{}}],"RiskTotalCount":3,"Risks":"[{\"InstanceId\":\"ins-xxx1\",\"InstanceName\":\"xxx1\",\"InstanceState\":\"RUNNING\",\"PrivateIPAddresses\":[\"1.17.64.2\"],\"PublicIPAddresses\":null,\"Region\":\"ap-shanghai\",\"Tags\":null,\"Zone\":\"ap-shanghai-2\"},{\"InstanceId\":\"ins-xxx2\",\"InstanceName\":\"xxx2\",\"InstanceState\":\"RUNNING\",\"PrivateIPAddresses\":[\"1.17.64.11\"],\"PublicIPAddresses\":null,\"Region\":\"ap-shanghai\",\"Tags\":null,\"Zone\":\"ap-shanghai-2\"}]","StrategyId":9}} */
  RiskFieldsDesc: RiskFieldsDesc[] | null;
  /** 评估项ID */
  StrategyId: number | null;
  /** 风险实例个数 */
  RiskTotalCount: number | null;
  /** 风险实例详情列表，需要json decode */
  Risks: string | null;
  /** 巡检资源数 */
  ResourceCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Advisor 云顾问} */
declare interface Advisor {
  (): Versions;
  /** 查询评估项信息 {@link DescribeStrategiesRequest} {@link DescribeStrategiesResponse} */
  DescribeStrategies(data?: DescribeStrategiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategiesResponse>;
  /** 查询评估项风险实例列表 {@link DescribeTaskStrategyRisksRequest} {@link DescribeTaskStrategyRisksResponse} */
  DescribeTaskStrategyRisks(data: DescribeTaskStrategyRisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStrategyRisksResponse>;
}

export declare type Versions = ["2020-07-21"];

export default Advisor;
