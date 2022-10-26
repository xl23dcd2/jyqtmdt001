/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 失败资源信息。绑定或解绑资源标签时失败返回 */
declare interface FailedResource {
  /** 失败的资源六段式 */
  Resource: string;
  /** 错误码 */
  Code: string;
  /** 错误信息 */
  Message: string;
}

/** 项目信息 */
declare interface Project {
  /** 项目ID */
  ProjectId: number;
  /** 项目名称 */
  ProjectName: string;
  /** 创建人uin */
  CreatorUin: number;
  /** 项目描述 */
  ProjectInfo: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 资源标签键值 */
declare interface ResourceIdTag {
  /** 资源唯一标识 */
  ResourceId: string | null;
  /** 标签键值对 */
  TagKeyValues: TagInfo[] | null;
}

/** 资源标签 */
declare interface ResourceTag {
  /** 资源所在地域 */
  ResourceRegion: string | null;
  /** 业务类型 */
  ServiceType: string | null;
  /** 资源前缀 */
  ResourcePrefix: string | null;
  /** 资源唯一标记 */
  ResourceId: string | null;
  /** 资源标签 */
  Tags: TagInfo[] | null;
}

/** 资源及关联的标签(键和值)。 */
declare interface ResourceTagMapping {
  /** 资源六段式。腾讯云使用资源六段式描述一个资源。例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。 */
  Resource: string;
  /** 资源关联的标签列表 */
  Tags: TagInfo[];
}

/** 表示一个标签键值对 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** tag过滤数组多个是与的关系 */
declare interface TagFilter {
  /** 标签键 */
  TagKey: string;
  /** 标签值数组 多个值的话是或的关系 */
  TagValue?: string[];
}

/** 标签键对象 */
declare interface TagKeyObject {
  /** 标签键 */
  TagKey: string;
}

/** 标签键值对以及资源ID */
declare interface TagResource {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
  /** 资源ID */
  ResourceId: string;
  /** 标签键MD5值 */
  TagKeyMd5: string;
  /** 标签值MD5值 */
  TagValueMd5: string;
  /** 资源类型 */
  ServiceType: string | null;
}

/** 表示一个标签键值对以及是否允许删除 */
declare interface TagWithDelete {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
  /** 是否可以删除 */
  CanDelete: number;
}

declare interface AddProjectRequest {
  /** 项目名称 */
  ProjectName: string;
  /** 项目描述 */
  Info?: string;
}

declare interface AddProjectResponse {
  /** 项目Id */
  ProjectId?: number;
  /** 是否为新项目 */
  IsNew?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddResourceTagRequest {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
  /** [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606) */
  Resource: string;
}

declare interface AddResourceTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachResourcesTagRequest {
  /** 资源所属业务名称（资源六段式中的第三段） */
  ServiceType: string;
  /** 资源ID数组，资源个数最多为50 */
  ResourceIds: string[];
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
  /** 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填 */
  ResourceRegion?: string;
  /** 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填 */
  ResourcePrefix?: string;
}

declare interface AttachResourcesTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTagRequest {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

declare interface CreateTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTagsRequest {
  /** 标签列表。N取值范围：0~9 */
  Tags?: TagInfo[];
}

declare interface CreateTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteResourceTagRequest {
  /** 标签键 */
  TagKey: string;
  /** [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606) */
  Resource: string;
}

declare interface DeleteResourceTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTagRequest {
  /** 需要删除的标签键 */
  TagKey: string;
  /** 需要删除的标签值 */
  TagValue: string;
}

declare interface DeleteTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTagsRequest {
  /** 标签列表。N取值范围：0~9 */
  Tags: TagInfo[];
}

declare interface DeleteTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectsRequest {
  /** 传1拉取所有项目（包括隐藏项目），不传或传0拉取显示项目 */
  AllList: number;
  /** 分页条数，固定值1000。 */
  Limit: number;
  /** 分页偏移量。 */
  Offset: number;
}

declare interface DescribeProjectsResponse {
  /** 数据总条数 */
  Total: number;
  /** 项目列表 */
  Projects: Project[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceTagsByResourceIdsRequest {
  /** 业务类型 */
  ServiceType: string;
  /** 资源前缀 */
  ResourcePrefix: string;
  /** 资源ID数组，大小不超过50 */
  ResourceIds: string[];
  /** 资源所在地域 */
  ResourceRegion: string;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
}

declare interface DescribeResourceTagsByResourceIdsResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 标签列表 */
  Tags?: TagResource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceTagsByResourceIdsSeqRequest {
  /** 业务类型 */
  ServiceType: string;
  /** 资源前缀 */
  ResourcePrefix: string;
  /** 资源唯一标记 */
  ResourceIds: string[];
  /** 资源所在地域 */
  ResourceRegion: string;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
}

declare interface DescribeResourceTagsByResourceIdsSeqResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 标签列表 */
  Tags?: TagResource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceTagsByTagKeysRequest {
  /** 业务类型 */
  ServiceType: string;
  /** 资源前缀 */
  ResourcePrefix: string;
  /** 资源地域 */
  ResourceRegion: string;
  /** 资源唯一标识 */
  ResourceIds: string[];
  /** 资源标签键 */
  TagKeys: string[];
  /** 每页大小，默认为 400 */
  Limit?: number;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
}

declare interface DescribeResourceTagsByTagKeysResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 资源标签 */
  Rows?: ResourceIdTag[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceTagsRequest {
  /** 创建者uin */
  CreateUin?: number;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 业务类型 */
  ServiceType?: string;
  /** 资源前缀 */
  ResourcePrefix?: string;
  /** 资源唯一标识。只输入ResourceId进行查询可能会查询较慢，或者无法匹配到结果，建议在输入ResourceId的同时也输入ServiceType、ResourcePrefix和ResourceRegion（不区分地域的资源可忽略该参数） */
  ResourceId?: string;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
  /** 是否是cos的资源（0或者1），输入的ResourceId为cos资源时必填 */
  CosResourceId?: number;
}

declare interface DescribeResourceTagsResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number | null;
  /** 资源标签 */
  Rows?: TagResource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourcesByTagsRequest {
  /** 标签过滤数组 */
  TagFilters: TagFilter[];
  /** 创建标签者uin */
  CreateUin?: number;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
  /** 资源前缀 */
  ResourcePrefix?: string;
  /** 资源唯一标记 */
  ResourceId?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 业务类型 */
  ServiceType?: string;
}

declare interface DescribeResourcesByTagsResponse {
  /** 结果总数 */
  TotalCount: number;
  /** 数据位移偏量 */
  Offset: number;
  /** 每页大小 */
  Limit: number | null;
  /** 资源标签 */
  Rows: ResourceTag[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourcesByTagsUnionRequest {
  /** 标签过滤数组 */
  TagFilters: TagFilter[];
  /** 创建标签者uin */
  CreateUin?: number;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
  /** 资源前缀 */
  ResourcePrefix?: string;
  /** 资源唯一标记 */
  ResourceId?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 业务类型 */
  ServiceType?: string;
}

declare interface DescribeResourcesByTagsUnionResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 资源标签 */
  Rows?: ResourceTag[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagKeysRequest {
  /** 创建者用户 Uin，不传或为空只将 Uin 作为条件查询 */
  CreateUin?: number;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
  /** 是否展现项目 */
  ShowProject?: number;
}

declare interface DescribeTagKeysResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 标签列表 */
  Tags?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagValuesRequest {
  /** 标签键列表 */
  TagKeys: string[];
  /** 创建者用户 Uin，不传或为空只将 Uin 作为条件查询 */
  CreateUin?: number;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
}

declare interface DescribeTagValuesResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 标签列表 */
  Tags?: TagInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagValuesSeqRequest {
  /** 标签键列表 */
  TagKeys: string[];
  /** 创建者用户 Uin，不传或为空只将 Uin 作为条件查询 */
  CreateUin?: number;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
}

declare interface DescribeTagValuesSeqResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 标签列表 */
  Tags?: TagInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagsRequest {
  /** 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签 */
  TagKey?: string;
  /** 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签 */
  TagValue?: string;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
  /** 创建者用户 Uin，不传或为空只将 Uin 作为条件查询 */
  CreateUin?: number;
  /** 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值 */
  TagKeys?: string[];
  /** 是否展现项目标签 */
  ShowProject?: number;
}

declare interface DescribeTagsResponse {
  /** 结果总数 */
  TotalCount: number;
  /** 数据位移偏量 */
  Offset: number;
  /** 每页大小 */
  Limit: number;
  /** 标签列表 */
  Tags: TagWithDelete[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagsSeqRequest {
  /** 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签 */
  TagKey?: string;
  /** 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签 */
  TagValue?: string;
  /** 数据偏移量，默认为 0, 必须为Limit参数的整数倍 */
  Offset?: number;
  /** 每页大小，默认为 15 */
  Limit?: number;
  /** 创建者用户 Uin，不传或为空只将 Uin 作为条件查询 */
  CreateUin?: number;
  /** 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值 */
  TagKeys?: string[];
  /** 是否展现项目标签 */
  ShowProject?: number;
}

declare interface DescribeTagsSeqResponse {
  /** 结果总数 */
  TotalCount?: number;
  /** 数据位移偏量 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
  /** 标签列表 */
  Tags?: TagWithDelete[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachResourcesTagRequest {
  /** 资源所属业务名称（资源六段式中的第三段） */
  ServiceType: string;
  /** 资源ID数组，资源个数最多为50 */
  ResourceIds: string[];
  /** 需要解绑的标签键 */
  TagKey: string;
  /** 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填 */
  ResourceRegion?: string;
  /** 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填 */
  ResourcePrefix?: string;
}

declare interface DetachResourcesTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetResourcesRequest {
  /** 资源六段式列表。腾讯云使用资源六段式描述一个资源。例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。如果传入了此参数会返回所有匹配的资源列表，指定的MaxResults会失效。N取值范围：0~9 */
  ResourceList?: string[];
  /** 标签键和标签值。指定多个标签，会查询同时绑定了该多个标签的资源。N取值范围：0~5。每个TagFilters中的TagValue最多支持10个 */
  TagFilters?: TagFilter[];
  /** 从上一页的响应中获取的下一页的Token值。如果是第一次请求，设置为空。 */
  PaginationToken?: string;
  /** 每一页返回的数据最大条数，最大200。缺省值：50。 */
  MaxResults?: number;
}

declare interface GetResourcesResponse {
  /** 获取的下一页的Token值 */
  PaginationToken: string;
  /** 资源及关联的标签(键和值)列表 */
  ResourceTagMappingList: ResourceTagMapping[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTagKeysRequest {
  /** 从上一页的响应中获取的下一页的Token值。如果是第一次请求，设置为空。 */
  PaginationToken?: string;
  /** 每一页返回的数据最大条数，最大1000。缺省值：50。 */
  MaxResults?: number;
}

declare interface GetTagKeysResponse {
  /** 获取的下一页的Token值 */
  PaginationToken: string;
  /** 标签键信息。 */
  TagKeys: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTagValuesRequest {
  /** 标签键。返回所有标签键列表对应的标签值。最大长度：20 */
  TagKeys: string[];
  /** 从上一页的响应中获取的下一页的Token值。如果是第一次请求，设置为空。 */
  PaginationToken?: string;
  /** 每一页返回的数据最大条数，最大1000。缺省值：50。 */
  MaxResults?: number;
}

declare interface GetTagValuesResponse {
  /** 获取的下一页的Token值 */
  PaginationToken: string;
  /** 标签列表。 */
  Tags: TagInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTagsRequest {
  /** 从上一页的响应中获取的下一页的Token值。如果是第一次请求，设置为空。 */
  PaginationToken?: string;
  /** 每一页返回的数据最大条数，最大1000。缺省值：50。 */
  MaxResults?: number;
  /** 标签键。返回所有标签键列表对应的标签。最大长度：20 */
  TagKeys?: string[];
}

declare interface GetTagsResponse {
  /** 获取的下一页的Token值 */
  PaginationToken: string;
  /** 标签列表。 */
  Tags: TagInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyResourceTagsRequest {
  /** [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606) */
  Resource: string;
  /** 需要增加或修改的标签集合。如果Resource描述的资源未关联输入的标签键，则增加关联；若已关联，则将该资源关联的键对应的标签值修改为输入值。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。 */
  ReplaceTags?: TagInfo[];
  /** 需要解关联的标签集合。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。 */
  DeleteTags?: TagKeyObject[];
}

declare interface ModifyResourceTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyResourcesTagValueRequest {
  /** 资源所属业务名称（资源六段式中的第三段） */
  ServiceType: string;
  /** 资源ID数组，资源个数最多为50 */
  ResourceIds: string[];
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
  /** 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填 */
  ResourceRegion?: string;
  /** 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填 */
  ResourcePrefix?: string;
}

declare interface ModifyResourcesTagValueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TagResourcesRequest {
  /** 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息例如：ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}。N取值范围：0~9 */
  ResourceList: string[];
  /** 标签键和标签值。如果指定多个标签，则会为指定资源同时创建并绑定该多个标签。同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。如果标签不存在会为您自动创建标签。N取值范围：0~9 */
  Tags: TagInfo[];
}

declare interface TagResourcesResponse {
  /** 失败资源信息。创建并绑定标签成功时，返回的FailedResources为空。创建并绑定标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。 */
  FailedResources: FailedResource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnTagResourcesRequest {
  /** 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息例如：ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}。N取值范围：0~9 */
  ResourceList: string[];
  /** 标签键。取值范围：0~9 */
  TagKeys: string[];
}

declare interface UnTagResourcesResponse {
  /** 失败资源信息。解绑标签成功时，返回的FailedResources为空。解绑标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。 */
  FailedResources: FailedResource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateProjectRequest {
  /** 项目ID */
  ProjectId: number;
  /** 项目名称 */
  ProjectName?: string;
  /** 禁用项目，1，禁用，0，启用 */
  Disable?: number;
  /** 备注 */
  Info?: string;
}

declare interface UpdateProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateResourceTagValueRequest {
  /** 资源关联的标签键 */
  TagKey: string;
  /** 修改后的标签值 */
  TagValue: string;
  /** [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606) */
  Resource: string;
}

declare interface UpdateResourceTagValueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [标签](https://cloud.tencent.com/document/product/651) */
declare interface Tag {
  (): Versions;
  /** 创建项目 */
  AddProject(data: AddProjectRequest, config?: AxiosRequestConfig): AxiosPromise<AddProjectResponse>;
  /** 标签关联资源 */
  AddResourceTag(data: AddResourceTagRequest, config?: AxiosRequestConfig): AxiosPromise<AddResourceTagResponse>;
  /** 标签关联批量资源 */
  AttachResourcesTag(data: AttachResourcesTagRequest, config?: AxiosRequestConfig): AxiosPromise<AttachResourcesTagResponse>;
  /** 创建标签 */
  CreateTag(data: CreateTagRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTagResponse>;
  /** 批量创建标签 */
  CreateTags(data?: CreateTagsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTagsResponse>;
  /** 标签解绑资源 */
  DeleteResourceTag(data: DeleteResourceTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceTagResponse>;
  /** 删除标签 */
  DeleteTag(data: DeleteTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagResponse>;
  /** 批量删除标签 */
  DeleteTags(data: DeleteTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagsResponse>;
  /** 获取项目列表 */
  DescribeProjects(data: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** 查询资源关联标签 */
  DescribeResourceTags(data?: DescribeResourceTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTagsResponse>;
  /** 批量查看资源关联的标签 */
  DescribeResourceTagsByResourceIds(data: DescribeResourceTagsByResourceIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTagsByResourceIdsResponse>;
  /** 按顺序查看资源关联的标签 */
  DescribeResourceTagsByResourceIdsSeq(data: DescribeResourceTagsByResourceIdsSeqRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTagsByResourceIdsSeqResponse>;
  /** 根据标签键获取资源标签 */
  DescribeResourceTagsByTagKeys(data: DescribeResourceTagsByTagKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTagsByTagKeysResponse>;
  /** 通过标签查询资源列表 */
  DescribeResourcesByTags(data: DescribeResourcesByTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesByTagsResponse>;
  /** 通过标签查询资源列表并集 */
  DescribeResourcesByTagsUnion(data: DescribeResourcesByTagsUnionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesByTagsUnionResponse>;
  /** 查询标签键 */
  DescribeTagKeys(data?: DescribeTagKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagKeysResponse>;
  /** 查询标签值 */
  DescribeTagValues(data: DescribeTagValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagValuesResponse>;
  /** 按顺序查询标签值 */
  DescribeTagValuesSeq(data: DescribeTagValuesSeqRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagValuesSeqResponse>;
  /** 查询标签列表 */
  DescribeTags(data?: DescribeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsResponse>;
  /** 按顺序查询标签列表 */
  DescribeTagsSeq(data?: DescribeTagsSeqRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsSeqResponse>;
  /** 标签解绑批量资源 */
  DetachResourcesTag(data: DetachResourcesTagRequest, config?: AxiosRequestConfig): AxiosPromise<DetachResourcesTagResponse>;
  /** 查询资源标签列表 */
  GetResources(data?: GetResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<GetResourcesResponse>;
  /** 查询标签键列表 */
  GetTagKeys(data?: GetTagKeysRequest, config?: AxiosRequestConfig): AxiosPromise<GetTagKeysResponse>;
  /** 查询标签值列表 */
  GetTagValues(data: GetTagValuesRequest, config?: AxiosRequestConfig): AxiosPromise<GetTagValuesResponse>;
  /** 获取标签列表 */
  GetTags(data?: GetTagsRequest, config?: AxiosRequestConfig): AxiosPromise<GetTagsResponse>;
  /** 批量修改资源关联的标签 */
  ModifyResourceTags(data: ModifyResourceTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceTagsResponse>;
  /** 修改批量资源关联的标签值 */
  ModifyResourcesTagValue(data: ModifyResourcesTagValueRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcesTagValueResponse>;
  /** 为资源绑定标签 */
  TagResources(data: TagResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<TagResourcesResponse>;
  /** 为资源解绑标签 */
  UnTagResources(data: UnTagResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<UnTagResourcesResponse>;
  /** 修改项目 */
  UpdateProject(data: UpdateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProjectResponse>;
  /** 修改资源标签值 */
  UpdateResourceTagValue(data: UpdateResourceTagValueRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateResourceTagValueResponse>;
}

export declare type Versions = ["2018-08-13"];

export default Tag;
