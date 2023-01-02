/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 识别出的算术式信息及评估结果 */
declare interface Item {
  /** 识别的算式是否正确，算式运算结果: ‘YES’:正确 ‘NO’: 错误 ‘NA’: 非法参数 */
  Item: string;
  /** 识别出的算式，识别出的文本行字符串 */
  ItemString: string;
  /** 识别的算式在图片上的位置信息，文本行在旋转纠正之后的图像中的像素坐 标，表示为(左上角 x, 左上角 y，宽 width， 高 height) */
  ItemCoord: ItemCoord;
  /** 错题推荐答案，算式运算结果正确返回为 ""，算式运算结果错误返回推荐答案 (注:暂不支持多个关系运算符(如 1<10<7)、 无关系运算符(如 frac(1,2)+frac(2,3))、单 位换算(如 1 元=100 角)错题的推荐答案 返回) */
  Answer: string;
  /** 算式题型编号，如加减乘除四则题型，具体题型及编号如下：1 加减乘除四则 2 加减乘除已知结果求运算因子3 判断大小 4 约等于估算 5 带余数除法 6 分数四则运算 7 单位换算 8 竖式加减法 9 竖式乘除法 10 脱式计算 11 解方程 */
  ExpressionType: string | null;
  /** 文本行置信度 */
  ItemConf: number | null;
  /** 用于标识题目 id，如果有若干算式属于同一 题，则其对应的 id 相同。 */
  QuestionId: string | null;
}

/** 目标算式在图片上的坐标信息 */
declare interface ItemCoord {
  /** 算式高度 */
  Height: number;
  /** 算式宽度 */
  Width: number;
  /** 算式图的左上角横坐标 */
  X: number;
  /** 算式图的左上角纵坐标 */
  Y: number;
}

declare interface EvaluationRequest {
  /** 图片唯一标识，一张图片一个SessionId； */
  SessionId: string;
  /** 图片数据，需要使用base64对图片的二进制数据进行编码，与url参数二者填一即可； */
  Image?: string;
  /** 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 HcmAppid 可以在[控制台](https://console.cloud.tencent.com/hcm)【应用管理】下新建。 */
  HcmAppid?: string;
  /** 图片url，与Image参数二者填一即可； */
  Url?: string;
  /** 横屏拍摄开关，若开启则支持传输横屏拍摄的图片； */
  SupportHorizontalImage?: boolean;
  /** 拒绝非速算图（如风景图、人物图）开关，若开启，则遇到非速算图会快速返回拒绝的结果，但极端情况下可能会影响评估结果（比如算式截图贴到风景画里可能被判为非速算图直接返回了）。 */
  RejectNonArithmeticImage?: boolean;
  /** 异步模式标识，0：同步模式，1：异步模式。默认为同步模式 */
  IsAsync?: number;
  /** 是否展开耦合算式中的竖式计算 */
  EnableDispRelatedVertical?: boolean;
  /** 是否展示竖式算式的中间结果和格式控制字符 */
  EnableDispMidresult?: boolean;
  /** 是否开启pdf识别，默认开启 */
  EnablePdfRecognize?: boolean;
  /** pdf页码，从0开始，默认为0 */
  PdfPageIndex?: number;
  /** 是否返回LaTex，默认为0返回普通格式，设置成1返回LaTex格式 */
  LaTex?: number;
  /** 用于选择是否拒绝模糊题 目。打开则丢弃模糊题目， 不进行后续的判题返回结 果。 */
  RejectVagueArithmetic?: boolean;
}

declare interface EvaluationResponse {
  /** 图片唯一标识，一张图片一个SessionId； */
  SessionId: string;
  /** 识别出的算式信息； */
  Items: Item[] | null;
  /** 任务 id，用于查询接口 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Hcm 数学作业批改} */
declare interface Hcm {
  (): Versions;
  /** 速算题目批改接口 {@link EvaluationRequest} {@link EvaluationResponse} */
  Evaluation(data: EvaluationRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluationResponse>;
}

export declare type Versions = ["2018-11-06"];

export default Hcm;
