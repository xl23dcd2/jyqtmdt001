/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateAudioDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如music.mp3 */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateAudioDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDataDepositRequest {
  /** 业务数据明文(json格式字符串)，最大256kb */
  EvidenceInfo: string;
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateDataDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDocDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如 test.doc */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateDocDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHashDepositNoCertRequest {
  /** 数据hash */
  EvidenceHash: string;
  /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
  BusinessId?: string;
  /** 业务扩展信息 */
  EvidenceInfo?: string;
}

declare interface CreateHashDepositNoCertResponse {
  /** 透传字段 */
  BusinessId: string | null;
  /** 存证编码 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHashDepositNoSealRequest {
  /** 数据hash */
  EvidenceHash: string;
  /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
  BusinessId?: string;
  /** 业务扩展信息 */
  EvidenceInfo?: string;
}

declare interface CreateHashDepositNoSealResponse {
  /** 透传字段 */
  BusinessId: string | null;
  /** 存证编码 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHashDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据hash */
  EvidenceHash: string;
  /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
  BusinessId?: string;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateHashDepositResponse {
  /** 透传字段 */
  BusinessId: string | null;
  /** 存证编码 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateImageDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如 test.png */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateImageDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVideoDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如music.mkv */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateVideoDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDepositCertRequest {
  /** 存证编码 */
  EvidenceId: string;
}

declare interface GetDepositCertResponse {
  /** 存证编码 */
  EvidenceId: string;
  /** 存证证书文件临时链接 */
  EvidenceCert: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDepositFileRequest {
  /** 存证编码 */
  EvidenceId: string;
}

declare interface GetDepositFileResponse {
  /** 存证编号 */
  EvidenceId: string;
  /** 存证文件临时链接 */
  EvidenceFile: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDepositInfoRequest {
  /** 存证编码 */
  EvidenceId: string;
}

declare interface GetDepositInfoResponse {
  /** 存证编号 */
  EvidenceId: string;
  /** 上链时间 */
  EvidenceTime: string;
  /** 区块链交易哈希 */
  EvidenceTxHash: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyEvidenceBlockChainTxHashRequest {
  /** 区块链交易 hash，在“存证基本信息查询（GetDepositInfo）”接口中可以获取。 */
  EvidenceTxHash: string;
}

declare interface VerifyEvidenceBlockChainTxHashResponse {
  /** 核验结果，true为核验成功，fals为核验失败 */
  Result: boolean;
  /** 存证时间，仅当核验结果为true时返回 */
  EvidenceTime: string | null;
  /** 存证编码，仅当核验结果为true时返回 */
  EvidenceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyEvidenceHashRequest {
  /** 存证内容hash，hash类型即为用户在存证时所用或所选的hash类型 */
  EvidenceHash: string;
}

declare interface VerifyEvidenceHashResponse {
  /** 核验结果，true为核验成功，false为核验失败 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20210303 {
  interface VersionHeader { headers: { 'X-TC-Version': '2021-03-03' } }

  interface CreateAudioDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateAudioDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateDataDepositRequest {
    /** 业务数据明文(json格式字符串)，最大256kb */
    EvidenceInfo: string;
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 数据hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateDataDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateDocDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateDocDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateHashDepositNoCertRequest {
    /** 数据hash */
    EvidenceHash: string;
    /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 业务扩展信息 */
    EvidenceInfo?: string;
  }

  interface CreateHashDepositNoCertResponse {
    /** 透传字段 */
    BusinessId: string | null;
    /** 存证编码 */
    EvidenceId: string;
    /** 上链时间 */
    EvidenceTime: string;
    /** 区块链交易哈希 */
    EvidenceTxHash: string;
    /** 区块高度 */
    BlockchainHeight: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateHashDepositNoSealRequest {
    /** 数据hash */
    EvidenceHash: string;
    /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 业务扩展信息 */
    EvidenceInfo?: string;
  }

  interface CreateHashDepositNoSealResponse {
    /** 透传字段 */
    BusinessId: string | null;
    /** 存证编码 */
    EvidenceId: string;
    /** 上链时间 */
    EvidenceTime: string;
    /** 区块链交易哈希 */
    EvidenceTxHash: string;
    /** 区块高度 */
    BlockchainHeight: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateHashDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 数据hash */
    EvidenceHash: string;
    /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateHashDepositResponse {
    /** 透传字段 */
    BusinessId: string | null;
    /** 存证编码 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateImageDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 test.png */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateImageDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateVideoDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateVideoDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateWebpageDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 网页链接 */
    EvidenceUrl: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateWebpageDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetDepositCertRequest {
    /** 存证编码 */
    EvidenceId: string;
  }

  interface GetDepositCertResponse {
    /** 存证编码 */
    EvidenceId: string;
    /** 存证证书文件临时链接 */
    EvidenceCert: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetDepositFileRequest {
    /** 存证编码 */
    EvidenceId: string;
  }

  interface GetDepositFileResponse {
    /** 存证编号 */
    EvidenceId: string;
    /** 存证文件临时链接 */
    EvidenceFile: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetDepositInfoRequest {
    /** 存证编码 */
    EvidenceId: string;
  }

  interface GetDepositInfoResponse {
    /** 存证编号 */
    EvidenceId: string;
    /** 上链时间 */
    EvidenceTime: string;
    /** 区块链交易哈希 */
    EvidenceTxHash: string;
    /** 区块高度 */
    BlockchainHeight: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** {@link Btoe 区块链可信取证} */
declare interface Btoe {
  (): Versions;
  /** {@link CreateAudioDeposit 音频文件存证}({@link CreateAudioDepositRequest 请求参数}): {@link CreateAudioDepositResponse 返回参数} */
  CreateAudioDeposit(data: CreateAudioDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAudioDepositResponse>;
  /** {@link CreateDataDeposit 业务数据明文存证}({@link CreateDataDepositRequest 请求参数}): {@link CreateDataDepositResponse 返回参数} */
  CreateDataDeposit(data: CreateDataDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataDepositResponse>;
  /** {@link CreateDocDeposit 文档存证}({@link CreateDocDepositRequest 请求参数}): {@link CreateDocDepositResponse 返回参数} */
  CreateDocDeposit(data: CreateDocDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocDepositResponse>;
  /** {@link CreateHashDeposit 哈希上链存证}({@link CreateHashDepositRequest 请求参数}): {@link CreateHashDepositResponse 返回参数} */
  CreateHashDeposit(data: CreateHashDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHashDepositResponse>;
  /** {@link CreateHashDepositNoCert 哈希上链存证(无证书)}({@link CreateHashDepositNoCertRequest 请求参数}): {@link CreateHashDepositNoCertResponse 返回参数} */
  CreateHashDepositNoCert(data: CreateHashDepositNoCertRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHashDepositNoCertResponse>;
  /** {@link CreateHashDepositNoSeal 哈希上链存证(有证书，无签章)}({@link CreateHashDepositNoSealRequest 请求参数}): {@link CreateHashDepositNoSealResponse 返回参数} */
  CreateHashDepositNoSeal(data: CreateHashDepositNoSealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHashDepositNoSealResponse>;
  /** {@link CreateImageDeposit 图片文件存证}({@link CreateImageDepositRequest 请求参数}): {@link CreateImageDepositResponse 返回参数} */
  CreateImageDeposit(data: CreateImageDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageDepositResponse>;
  /** {@link CreateVideoDeposit 视频文件存证}({@link CreateVideoDepositRequest 请求参数}): {@link CreateVideoDepositResponse 返回参数} */
  CreateVideoDeposit(data: CreateVideoDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoDepositResponse>;
  /** {@link GetDepositCert BTOE存证电子凭证查询}({@link GetDepositCertRequest 请求参数}): {@link GetDepositCertResponse 返回参数} */
  GetDepositCert(data: GetDepositCertRequest, config?: AxiosRequestConfig): AxiosPromise<GetDepositCertResponse>;
  /** {@link GetDepositFile 存证文件查询}({@link GetDepositFileRequest 请求参数}): {@link GetDepositFileResponse 返回参数} */
  GetDepositFile(data: GetDepositFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetDepositFileResponse>;
  /** {@link GetDepositInfo 存证基本信息查询}({@link GetDepositInfoRequest 请求参数}): {@link GetDepositInfoResponse 返回参数} */
  GetDepositInfo(data: GetDepositInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetDepositInfoResponse>;
  /** {@link VerifyEvidenceBlockChainTxHash 区块链交易hash核验接口}({@link VerifyEvidenceBlockChainTxHashRequest 请求参数}): {@link VerifyEvidenceBlockChainTxHashResponse 返回参数} */
  VerifyEvidenceBlockChainTxHash(data: VerifyEvidenceBlockChainTxHashRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyEvidenceBlockChainTxHashResponse>;
  /** {@link VerifyEvidenceHash 核验存证内容hash}({@link VerifyEvidenceHashRequest 请求参数}): {@link VerifyEvidenceHashResponse 返回参数} */
  VerifyEvidenceHash(data: VerifyEvidenceHashRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyEvidenceHashResponse>;
  /** {@link V20210303.CreateAudioDeposit 音频文件存证}({@link V20210303.CreateAudioDepositRequest 请求参数}): {@link V20210303.CreateAudioDepositResponse 返回参数} */
  CreateAudioDeposit(data: V20210303.CreateAudioDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateAudioDepositResponse>;
  /** {@link V20210303.CreateDataDeposit 业务数据明文存证}({@link V20210303.CreateDataDepositRequest 请求参数}): {@link V20210303.CreateDataDepositResponse 返回参数} */
  CreateDataDeposit(data: V20210303.CreateDataDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateDataDepositResponse>;
  /** {@link V20210303.CreateDocDeposit 文档存证}({@link V20210303.CreateDocDepositRequest 请求参数}): {@link V20210303.CreateDocDepositResponse 返回参数} */
  CreateDocDeposit(data: V20210303.CreateDocDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateDocDepositResponse>;
  /** {@link V20210303.CreateHashDeposit 哈希上链存证}({@link V20210303.CreateHashDepositRequest 请求参数}): {@link V20210303.CreateHashDepositResponse 返回参数} */
  CreateHashDeposit(data: V20210303.CreateHashDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateHashDepositResponse>;
  /** {@link V20210303.CreateHashDepositNoCert 哈希上链存证(无证书)}({@link V20210303.CreateHashDepositNoCertRequest 请求参数}): {@link V20210303.CreateHashDepositNoCertResponse 返回参数} */
  CreateHashDepositNoCert(data: V20210303.CreateHashDepositNoCertRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateHashDepositNoCertResponse>;
  /** {@link V20210303.CreateHashDepositNoSeal 哈希上链存证(有证书，无签章)}({@link V20210303.CreateHashDepositNoSealRequest 请求参数}): {@link V20210303.CreateHashDepositNoSealResponse 返回参数} */
  CreateHashDepositNoSeal(data: V20210303.CreateHashDepositNoSealRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateHashDepositNoSealResponse>;
  /** {@link V20210303.CreateImageDeposit 图片文件存证}({@link V20210303.CreateImageDepositRequest 请求参数}): {@link V20210303.CreateImageDepositResponse 返回参数} */
  CreateImageDeposit(data: V20210303.CreateImageDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateImageDepositResponse>;
  /** {@link V20210303.CreateVideoDeposit 视频文件存证}({@link V20210303.CreateVideoDepositRequest 请求参数}): {@link V20210303.CreateVideoDepositResponse 返回参数} */
  CreateVideoDeposit(data: V20210303.CreateVideoDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateVideoDepositResponse>;
  /** {@link V20210303.CreateWebpageDeposit 网页快照存证}({@link V20210303.CreateWebpageDepositRequest 请求参数}): {@link V20210303.CreateWebpageDepositResponse 返回参数} */
  CreateWebpageDeposit(data: V20210303.CreateWebpageDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateWebpageDepositResponse>;
  /** {@link V20210303.GetDepositCert BTOE存证电子凭证查询}({@link V20210303.GetDepositCertRequest 请求参数}): {@link V20210303.GetDepositCertResponse 返回参数} */
  GetDepositCert(data: V20210303.GetDepositCertRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.GetDepositCertResponse>;
  /** {@link V20210303.GetDepositFile 存证文件查询}({@link V20210303.GetDepositFileRequest 请求参数}): {@link V20210303.GetDepositFileResponse 返回参数} */
  GetDepositFile(data: V20210303.GetDepositFileRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.GetDepositFileResponse>;
  /** {@link V20210303.GetDepositInfo 存证基本信息查询}({@link V20210303.GetDepositInfoRequest 请求参数}): {@link V20210303.GetDepositInfoResponse 返回参数} */
  GetDepositInfo(data: V20210303.GetDepositInfoRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.GetDepositInfoResponse>;
}

export declare type Versions = ["2021-05-14", "2021-03-03"];

export default Btoe;
