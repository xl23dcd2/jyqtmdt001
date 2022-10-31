/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 接入点信息。 */
declare interface AccessPoint {
  /** 接入点的名称。 */
  AccessPointName: string;
  /** 接入点唯一ID。 */
  AccessPointId: string;
  /** 接入点的状态。可用，不可用。 */
  State: string;
  /** 接入点的位置。 */
  Location: string;
  /** 接入点支持的运营商列表。 */
  LineOperator: string[];
  /** 接入点管理的大区ID。 */
  RegionId: string;
  /** 接入点可用的端口类型列表。1000BASE-T代表千兆电口，1000BASE-LX代表千兆单模光口10km，1000BASE-ZX代表千兆单模光口80km,10GBASE-LR代表万兆单模光口10km,10GBASE-ZR代表万兆单模光口80km,10GBASE-LH代表万兆单模光口40km,100GBASE-LR4代表100G单模光口10km */
  AvailablePortType: string[] | null;
  /** 接入点经纬度 */
  Coordinate: Coordinate | null;
  /** 接入点所在城市 */
  City: string | null;
  /** 接入点地域名称 */
  Area: string | null;
  /** 接入点类型。VXLAN/QCPL/QCAR */
  AccessPointType: string | null;
}

/** BFD配置信息 */
declare interface BFDInfo {
  /** 健康检查次数 */
  ProbeFailedTimes?: number;
  /** 健康检查间隔 */
  Interval?: number;
}

/** bgp状态信息 */
declare interface BGPStatus {
  /** 腾讯侧主互联IP BGP状态 */
  TencentAddressBgpState: string;
  /** 腾讯侧备互联IP BGP状态 */
  TencentBackupAddressBgpState: string;
}

/** bgp参数，包括Asn，AuthKey */
declare interface BgpPeer {
  /** 用户侧，BGP Asn */
  Asn?: number;
  /** 用户侧BGP密钥 */
  AuthKey?: string;
}

/** 坐标，经维度描述 */
declare interface Coordinate {
  /** 纬度 */
  Lat: number;
  /** 经度 */
  Lng: number;
}

/** 物理专线信息列表 */
declare interface DirectConnect {
  /** 物理专线ID。 */
  DirectConnectId: string;
  /** 物理专线的名称。 */
  DirectConnectName: string;
  /** 物理专线的接入点ID。 */
  AccessPointId: string;
  /** 物理专线的状态。申请中：PENDING 申请驳回：REJECTED 待付款：TOPAY 已付款：PAID 建设中：ALLOCATED 已开通：AVAILABLE 删除中 ：DELETING已删除：DELETED 。 */
  State: string;
  /** 物理专线创建时间。 */
  CreatedTime: string;
  /** 物理专线的开通时间。 */
  EnabledTime: string;
  /** 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。 */
  LineOperator: string;
  /** 本地数据中心的地理位置。 */
  Location: string;
  /** 物理专线接入接口带宽，单位为Mbps。 */
  Bandwidth: number;
  /** 用户侧物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米） */
  PortType: string;
  /** 运营商或者服务商为物理专线提供的电路编码。 */
  CircuitCode: string | null;
  /** 冗余物理专线的ID。 */
  RedundantDirectConnectId: string;
  /** 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。 */
  Vlan: number | null;
  /** 物理专线调试腾讯侧互联IP。 */
  TencentAddress: string | null;
  /** 物理专线调试用户侧互联IP。 */
  CustomerAddress: string | null;
  /** 物理专线申请者姓名。默认从账户体系获取。 */
  CustomerName: string | null;
  /** 物理专线申请者联系邮箱。默认从账户体系获取。 */
  CustomerContactMail: string | null;
  /** 物理专线申请者联系号码。默认从账户体系获取。 */
  CustomerContactNumber: string | null;
  /** 物理专线的过期时间。 */
  ExpiredTime: string | null;
  /** 物理专线计费类型。 NON_RECURRING_CHARGE：一次性接入费用；PREPAID_BY_YEAR：按年预付费。 */
  ChargeType: string | null;
  /** 报障联系人。 */
  FaultReportContactPerson: string | null;
  /** 报障联系电话。 */
  FaultReportContactNumber: string | null;
  /** 标签键值对 */
  TagSet: Tag[] | null;
  /** 物理专线的接入点类型。 */
  AccessPointType: string;
  /** IDC所在城市 */
  IdcCity: string | null;
  /** 计费状态 */
  ChargeState: string | null;
  /** 物理专线开通时间 */
  StartTime: string | null;
  /** 物理专线是否已签署用户协议 */
  SignLaw: boolean | null;
  /** 物理专线是否为LocalZone */
  LocalZone: boolean | null;
  /** 该物理专线下vlan 0的专用通道数量 */
  VlanZeroDirectConnectTunnelCount: number | null;
  /** 该物理专线下非vlan 0的专用通道数量 */
  OtherVlanDirectConnectTunnelCount: number | null;
  /** 物理专线最小带宽 */
  MinBandwidth: number | null;
}

/** 专用通道信息列表 */
declare interface DirectConnectTunnel {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
  /** 物理专线ID */
  DirectConnectId: string;
  /** 专用通道状态AVAILABLE:就绪或者已连接PENDING:申请中ALLOCATING:配置中ALLOCATED:配置完成ALTERING:修改中DELETING:删除中DELETED:删除完成COMFIRMING:待接受REJECTED:拒绝 */
  State: string;
  /** 物理专线的拥有者，开发商账号 ID */
  DirectConnectOwnerAccount: string;
  /** 专用通道的拥有者，开发商账号 ID */
  OwnerAccount: string;
  /** 网络类型，分别为VPC、BMVPC、CCN VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网 */
  NetworkType: string;
  /** VPC地域对应的网络名，如ap-guangzhou */
  NetworkRegion: string;
  /** 私有网络统一 ID 或者黑石网络统一 ID */
  VpcId: string;
  /** 专线网关 ID */
  DirectConnectGatewayId: string;
  /** BGP ：BGP路由 STATIC：静态 默认为 BGP 路由 */
  RouteType: string;
  /** 用户侧BGP，Asn，AuthKey */
  BgpPeer: BgpPeer;
  /** 用户侧网段地址 */
  RouteFilterPrefixes: RouteFilterPrefix[];
  /** 专用通道的Vlan */
  Vlan: number;
  /** TencentAddress，腾讯侧互联 IP */
  TencentAddress: string;
  /** CustomerAddress，用户侧互联 IP */
  CustomerAddress: string;
  /** 专用通道名称 */
  DirectConnectTunnelName: string;
  /** 专用通道创建时间 */
  CreatedTime: string;
  /** 专用通道带宽值 */
  Bandwidth: number;
  /** 专用通道标签值 */
  TagSet: Tag[];
  /** 关联的网络自定义探测ID */
  NetDetectId: string | null;
  /** BGP community开关 */
  EnableBGPCommunity: boolean | null;
  /** 是否为Nat通道 */
  NatType: number | null;
  /** VPC地域简码，如gz、cd */
  VpcRegion: string | null;
  /** 是否开启BFD */
  BfdEnable: number | null;
  /** 专用通道接入点类型 */
  AccessPointType: string | null;
  /** 专线网关名称 */
  DirectConnectGatewayName: string | null;
  /** VPC名称 */
  VpcName: string | null;
  /** TencentBackupAddress，腾讯侧备用互联 IP */
  TencentBackupAddress: string | null;
  /** 专用通道关联的物理专线是否签署了用户协议 */
  SignLaw: boolean | null;
  /** 高速上云服务ID */
  CloudAttachId: string | null;
}

/** 专用通道扩展信息 */
declare interface DirectConnectTunnelExtra {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
  /** 物理专线ID */
  DirectConnectId: string;
  /** 专用通道状态AVAILABLE:就绪或者已连接PENDING:申请中ALLOCATING:配置中ALLOCATED:配置完成ALTERING:修改中DELETING:删除中DELETED:删除完成COMFIRMING:待接受REJECTED:拒绝 */
  State: string;
  /** 物理专线的拥有者，开发商账号 ID */
  DirectConnectOwnerAccount: string;
  /** 专用通道的拥有者，开发商账号 ID */
  OwnerAccount: string;
  /** 网络类型，分别为VPC、BMVPC、CCN VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网 */
  NetworkType: string;
  /** VPC地域对应的网络名，如ap-guangzhou */
  NetworkRegion: string;
  /** 私有网络统一 ID 或者黑石网络统一 ID */
  VpcId: string;
  /** 专线网关 ID */
  DirectConnectGatewayId: string;
  /** BGP ：BGP路由 STATIC：静态 默认为 BGP 路由 */
  RouteType: string;
  /** 用户侧BGP，Asn，AuthKey */
  BgpPeer: BgpPeer;
  /** 用户侧网段地址 */
  RouteFilterPrefixes: RouteFilterPrefix[];
  /** 互联网通道公网网段地址 */
  PublicAddresses: RouteFilterPrefix[];
  /** 专用通道的Vlan */
  Vlan: number;
  /** 腾讯侧互联 IP */
  TencentAddress: string;
  /** 腾讯侧备用互联IP */
  TencentBackupAddress: string;
  /** 用户侧互联 IP */
  CustomerAddress: string;
  /** 专用通道名称 */
  DirectConnectTunnelName: string;
  /** 专用通道创建时间 */
  CreatedTime: string;
  /** 专用通道带宽值 */
  Bandwidth: number;
  /** 关联的网络自定义探测ID */
  NetDetectId: string;
  /** BGP community开关 */
  EnableBGPCommunity: boolean;
  /** 是否为Nat通道 */
  NatType: number;
  /** VPC地域简码，如gz、cd */
  VpcRegion: string;
  /** 是否开启BFD */
  BfdEnable: number;
  /** 是否开启NQA */
  NqaEnable: number;
  /** 专用通道接入点类型 */
  AccessPointType: string;
  /** 专线网关名称 */
  DirectConnectGatewayName: string;
  /** VPC名称 */
  VpcName: string;
  /** 专用通道关联的物理专线是否签署了用户协议 */
  SignLaw: boolean;
  /** BFD配置信息 */
  BfdInfo: BFDInfo;
  /** NQA配置信息 */
  NqaInfo: NQAInfo;
  /** BGP状态 */
  BgpStatus: BGPStatus;
  /** 是否开启IPv6 */
  IPv6Enable: number | null;
  /** 腾讯侧互联IPv6地址 */
  TencentIPv6Address: string | null;
  /** 腾讯侧备用互联IPv6地址 */
  TencentBackupIPv6Address: string | null;
  /** BGPv6状态 */
  BgpIPv6Status: BGPStatus | null;
  /** 用户侧互联IPv6地址 */
  CustomerIPv6Address: string | null;
  /** 专用通道是否支持巨帧。1 支持，0 不支持 */
  JumboEnable: number | null;
  /** 专用通道是否支持高精度BFD。1支持，0不支持 */
  HighPrecisionBFDEnable: number | null;
}

/** 专用通道路由 */
declare interface DirectConnectTunnelRoute {
  /** 专用通道路由ID */
  RouteId: string;
  /** 网段CIDR */
  DestinationCidrBlock: string;
  /** 路由类型：BGP/STATIC路由 */
  RouteType: string;
  /** ENABLE：路由启用，DISABLE：路由禁用 */
  Status: string;
  /** ASPath信息 */
  ASPath: string[];
  /** 路由下一跳IP */
  NextHop: string;
}

/** 用于条件过滤查询 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 互联网地址详细信息 */
declare interface InternetAddressDetail {
  /** 互联网地址ID */
  InstanceId: string | null;
  /** 互联网网络地址 */
  Subnet: string | null;
  /** 网络地址掩码长度 */
  MaskLen: number | null;
  /** 0:BGP1:电信2:移动3:联通 */
  AddrType: number | null;
  /** 0:使用中1:已停用2:已退还 */
  Status: number;
  /** 申请时间 */
  ApplyTime: string | null;
  /** 停用时间 */
  StopTime: string | null;
  /** 退还时间 */
  ReleaseTime: string | null;
  /** 地域信息 */
  Region: string | null;
  /** 用户ID */
  AppId: number | null;
  /** 0:IPv4 1:IPv6 */
  AddrProto: number | null;
  /** 释放状态的IP地址保留的天数 */
  ReserveTime: number | null;
}

/** 互联网公网地址统计 */
declare interface InternetAddressStatistics {
  /** 地域 */
  Region: string | null;
  /** 互联网公网地址数量 */
  SubnetNum: number | null;
}

/** nqa配置信息 */
declare interface NQAInfo {
  /** 健康检查次数 */
  ProbeFailedTimes?: number;
  /** 健康检查间隔 */
  Interval?: number;
  /** 健康检查地址 */
  DestinationIp?: string;
}

/** 用户侧网段地址 */
declare interface RouteFilterPrefix {
  /** 用户侧网段地址 */
  Cidr?: string;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string | null;
  /** 标签值 */
  Value: string | null;
}

declare interface AcceptDirectConnectTunnelRequest {
  /** 物理专线拥有者接受共享专用通道申请 */
  DirectConnectTunnelId: string;
}

declare interface AcceptDirectConnectTunnelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ApplyInternetAddressRequest {
  /** CIDR地址掩码长度 */
  MaskLen: number;
  /** 0:BGP类型地址1：中国电信2：中国移动3：中国联通 */
  AddrType: number;
  /** 0：IPv41:IPv6 */
  AddrProto: number;
}

declare interface ApplyInternetAddressResponse {
  /** 互联网公网地址ID */
  InstanceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDirectConnectRequest {
  /** 物理专线的名称。 */
  DirectConnectName: string;
  /** 物理专线所在的接入点。您可以通过调用 DescribeAccessPoints接口获取地域ID。所选择的接入点必须存在且处于可接入的状态。 */
  AccessPointId: string;
  /** 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。 */
  LineOperator: string;
  /** 物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）。 */
  PortType: string;
  /** 运营商或者服务商为物理专线提供的电路编码。 */
  CircuitCode?: string;
  /** 本地数据中心的地理位置。 */
  Location?: string;
  /** 物理专线接入接口带宽，单位为Mbps，默认值为1000，取值范围为 [2, 10240]。 */
  Bandwidth?: number;
  /** 冗余物理专线的ID。 */
  RedundantDirectConnectId?: string;
  /** 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。 */
  Vlan?: number;
  /** 物理专线调试腾讯侧互联 IP。默认自动分配。 */
  TencentAddress?: string;
  /** 物理专线调试用户侧互联 IP。默认自动分配。 */
  CustomerAddress?: string;
  /** 物理专线申请者姓名。默认从账户体系获取。 */
  CustomerName?: string;
  /** 物理专线申请者联系邮箱。默认从账户体系获取。 */
  CustomerContactMail?: string;
  /** 物理专线申请者联系号码。默认从账户体系获取。 */
  CustomerContactNumber?: string;
  /** 报障联系人。 */
  FaultReportContactPerson?: string;
  /** 报障联系电话。 */
  FaultReportContactNumber?: string;
  /** 物理专线申请者是否签署了用户使用协议。默认已签署 */
  SignLaw?: boolean;
}

declare interface CreateDirectConnectResponse {
  /** 物理专线的ID。 */
  DirectConnectIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDirectConnectTunnelRequest {
  /** 专线 ID，例如：dc-kd7d06of */
  DirectConnectId: string;
  /** 专用通道名称 */
  DirectConnectTunnelName: string;
  /** 物理专线 owner，缺省为当前客户（物理专线 owner）共享专线时这里需要填写共享专线的开发商账号 ID */
  DirectConnectOwnerAccount?: string;
  /** 网络类型，分别为VPC、BMVPC，CCN，默认是VPCVPC：私有网络BMVPC：黑石网络CCN：云联网 */
  NetworkType?: string;
  /** 网络地域 */
  NetworkRegion?: string;
  /** 私有网络统一 ID 或者黑石网络统一 ID */
  VpcId?: string;
  /** 专线网关 ID，例如 dcg-d545ddf */
  DirectConnectGatewayId?: string;
  /** 专线带宽，单位：Mbps默认是物理专线带宽值 */
  Bandwidth?: number;
  /** BGP ：BGP路由STATIC：静态默认为 BGP 路由 */
  RouteType?: string;
  /** BgpPeer，用户侧bgp信息，包括Asn和AuthKey */
  BgpPeer?: BgpPeer;
  /** 静态路由，用户IDC的网段地址 */
  RouteFilterPrefixes?: RouteFilterPrefix[];
  /** vlan，范围：0 ~ 30000：不开启子接口默认值是非0 */
  Vlan?: number;
  /** TencentAddress，腾讯侧互联 IP */
  TencentAddress?: string;
  /** CustomerAddress，用户侧互联 IP */
  CustomerAddress?: string;
  /** TencentBackupAddress，腾讯侧备用互联 IP */
  TencentBackupAddress?: string;
  /** 高速上云服务ID */
  CloudAttachId?: string;
  /** 是否开启BFD */
  BfdEnable?: number;
  /** 是否开启NQA */
  NqaEnable?: number;
  /** BFD配置信息 */
  BfdInfo?: BFDInfo;
  /** NQA配置信息 */
  NqaInfo?: NQAInfo;
}

declare interface CreateDirectConnectTunnelResponse {
  /** 专用通道ID */
  DirectConnectTunnelIdSet: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDirectConnectRequest {
  /** 物理专线的ID。 */
  DirectConnectId: string;
}

declare interface DeleteDirectConnectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDirectConnectTunnelRequest {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
}

declare interface DeleteDirectConnectTunnelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessPointsRequest {
  /** 接入点所在的地域。使用DescribeRegions查询您可以通过调用 DescribeRegions接口获取地域ID。 */
  RegionId?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeAccessPointsResponse {
  /** 接入点信息。 */
  AccessPointSet?: AccessPoint[];
  /** 符合接入点数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectTunnelExtraRequest {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
}

declare interface DescribeDirectConnectTunnelExtraResponse {
  /** 专用通道扩展信息 */
  DirectConnectTunnelExtra?: DirectConnectTunnelExtra;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectTunnelsRequest {
  /** 过滤条件:参数不支持同时指定DirectConnectTunnelIds和Filters。 direct-connect-tunnel-name, 专用通道名称。 direct-connect-tunnel-id, 专用通道实例ID，如dcx-abcdefgh。direct-connect-id, 物理专线实例ID，如，dc-abcdefgh。 */
  Filters?: Filter[];
  /** 专用通道 ID数组 */
  DirectConnectTunnelIds?: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribeDirectConnectTunnelsResponse {
  /** 专用通道列表 */
  DirectConnectTunnelSet?: DirectConnectTunnel[];
  /** 符合专用通道数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectsRequest {
  /** 过滤条件: */
  Filters?: Filter[];
  /** 物理专线 ID数组 */
  DirectConnectIds?: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribeDirectConnectsResponse {
  /** 物理专线列表。 */
  DirectConnectSet?: DirectConnect[];
  /** 符合物理专线列表数量。 */
  TotalCount?: number;
  /** 用户名下物理专线是否都签署了用户协议 */
  AllSignLaw?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInternetAddressQuotaRequest {
}

declare interface DescribeInternetAddressQuotaResponse {
  /** IPv6互联网公网允许的最小前缀长度 */
  Ipv6PrefixLen?: number | null;
  /** BGP类型IPv4互联网地址配额 */
  Ipv4BgpQuota?: number | null;
  /** 非BGP类型IPv4互联网地址配额 */
  Ipv4OtherQuota?: number | null;
  /** BGP类型IPv4互联网地址已使用数量 */
  Ipv4BgpNum?: number | null;
  /** 非BGP类型互联网地址已使用数量 */
  Ipv4OtherNum?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInternetAddressRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值100 */
  Limit?: number;
  /** 过滤条件：AddrType, 地址类型。0：BGP 1; 1: 电信， 2：移动， 3：联通AddrProto地址类型。0：IPv4 1:IPv6Status 地址状态。 0：使用中， 1：已停用， 2：已退还Subnet 互联网公网地址，数组互联网公网地址ID，数组 */
  Filters?: Filter[];
}

declare interface DescribeInternetAddressResponse {
  /** 互联网公网地址数量 */
  TotalCount?: number;
  /** 互联网公网地址列表 */
  Subnets?: InternetAddressDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInternetAddressStatisticsRequest {
}

declare interface DescribeInternetAddressStatisticsResponse {
  /** 互联网公网地址统计信息数量 */
  TotalCount?: number;
  /** 互联网公网地址统计信息列表 */
  InternetAddressStatistics?: InternetAddressStatistics[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePublicDirectConnectTunnelRoutesRequest {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
  /** 过滤条件：route-type：路由类型，取值：BGP/STATICroute-subnet：路由cidr，取值如：192.68.1.0/24 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribePublicDirectConnectTunnelRoutesResponse {
  /** 互联网通道路由列表 */
  Routes?: DirectConnectTunnelRoute[];
  /** 记录总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableInternetAddressRequest {
  /** 公网互联网地址ID */
  InstanceId: string;
}

declare interface DisableInternetAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableInternetAddressRequest {
  /** 互联网公网地址ID */
  InstanceId: string;
}

declare interface EnableInternetAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDirectConnectAttributeRequest {
  /** 物理专线的ID。 */
  DirectConnectId: string;
  /** 物理专线名称。 */
  DirectConnectName?: string;
  /** 运营商或者服务商为物理专线提供的电路编码。 */
  CircuitCode?: string;
  /** 物理专线调试VLAN。 */
  Vlan?: number;
  /** 物理专线调试腾讯侧互联 IP。 */
  TencentAddress?: string;
  /** 物理专线调试用户侧互联 IP。 */
  CustomerAddress?: string;
  /** 物理专线申请者姓名。默认从账户体系获取。 */
  CustomerName?: string;
  /** 物理专线申请者联系邮箱。默认从账户体系获取。 */
  CustomerContactMail?: string;
  /** 物理专线申请者联系号码。默认从账户体系获取。 */
  CustomerContactNumber?: string;
  /** 报障联系人。 */
  FaultReportContactPerson?: string;
  /** 报障联系电话。 */
  FaultReportContactNumber?: string;
  /** 物理专线申请者补签用户使用协议 */
  SignLaw?: boolean;
  /** 物理专线带宽 */
  Bandwidth?: number;
}

declare interface ModifyDirectConnectAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDirectConnectTunnelAttributeRequest {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
  /** 专用通道名称 */
  DirectConnectTunnelName?: string;
  /** 用户侧BGP，包括Asn，AuthKey */
  BgpPeer?: BgpPeer;
  /** 用户侧网段地址 */
  RouteFilterPrefixes?: RouteFilterPrefix[];
  /** 腾讯侧互联IP */
  TencentAddress?: string;
  /** 用户侧互联IP */
  CustomerAddress?: string;
  /** 专用通道带宽值，单位为M。 */
  Bandwidth?: number;
  /** 腾讯侧备用互联IP */
  TencentBackupAddress?: string;
}

declare interface ModifyDirectConnectTunnelAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDirectConnectTunnelExtraRequest {
  /** 专用通道ID */
  DirectConnectTunnelId: string;
  /** 专用通道的Vlan */
  Vlan?: number;
  /** 用户侧BGP，Asn，AuthKey */
  BgpPeer?: BgpPeer;
  /** 用户侧过滤网段地址 */
  RouteFilterPrefixes?: RouteFilterPrefix;
  /** 腾讯侧互联IP */
  TencentAddress?: string;
  /** 腾讯侧备用互联IP */
  TencentBackupAddress?: string;
  /** 用户侧互联IP */
  CustomerAddress?: string;
  /** 专用通道带宽值 */
  Bandwidth?: number;
  /** BGP community开关 */
  EnableBGPCommunity?: boolean;
  /** 是否开启BFD */
  BfdEnable?: number;
  /** 是否开启NQA */
  NqaEnable?: number;
  /** BFD配置信息 */
  BfdInfo?: BFDInfo;
  /** NQA配置信息 */
  NqaInfo?: NQAInfo;
  /** 0：停用IPv61: 启用IPv6 */
  IPv6Enable?: number;
  /** 去往用户侧的路由信息 */
  CustomerIDCRoutes?: RouteFilterPrefix[];
  /** 是否开启巨帧1：开启0：不开启 */
  JumboEnable?: number;
}

declare interface ModifyDirectConnectTunnelExtraResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RejectDirectConnectTunnelRequest {
  /** 无 */
  DirectConnectTunnelId: string;
}

declare interface RejectDirectConnectTunnelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReleaseInternetAddressRequest {
  /** 公网互联网地址ID */
  InstanceId: string;
}

declare interface ReleaseInternetAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Dc 专线接入} */
declare interface Dc {
  (): Versions;
  /** {@link AcceptDirectConnectTunnel 接受专用通道申请}({@link AcceptDirectConnectTunnelRequest 请求参数}): {@link AcceptDirectConnectTunnelResponse 返回参数} */
  AcceptDirectConnectTunnel(data: AcceptDirectConnectTunnelRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptDirectConnectTunnelResponse>;
  /** {@link ApplyInternetAddress 申请互联网地址}({@link ApplyInternetAddressRequest 请求参数}): {@link ApplyInternetAddressResponse 返回参数} */
  ApplyInternetAddress(data: ApplyInternetAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyInternetAddressResponse>;
  /** {@link CreateDirectConnect 申请物理专线}({@link CreateDirectConnectRequest 请求参数}): {@link CreateDirectConnectResponse 返回参数} */
  CreateDirectConnect(data: CreateDirectConnectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDirectConnectResponse>;
  /** {@link CreateDirectConnectTunnel 创建专用通道}({@link CreateDirectConnectTunnelRequest 请求参数}): {@link CreateDirectConnectTunnelResponse 返回参数} */
  CreateDirectConnectTunnel(data: CreateDirectConnectTunnelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDirectConnectTunnelResponse>;
  /** {@link DeleteDirectConnect 删除物理专线}({@link DeleteDirectConnectRequest 请求参数}): {@link DeleteDirectConnectResponse 返回参数} */
  DeleteDirectConnect(data: DeleteDirectConnectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDirectConnectResponse>;
  /** {@link DeleteDirectConnectTunnel 删除专用通道}({@link DeleteDirectConnectTunnelRequest 请求参数}): {@link DeleteDirectConnectTunnelResponse 返回参数} */
  DeleteDirectConnectTunnel(data: DeleteDirectConnectTunnelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDirectConnectTunnelResponse>;
  /** {@link DescribeAccessPoints 查询物理专线接入点}({@link DescribeAccessPointsRequest 请求参数}): {@link DescribeAccessPointsResponse 返回参数} */
  DescribeAccessPoints(data?: DescribeAccessPointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessPointsResponse>;
  /** {@link DescribeDirectConnectTunnelExtra 查询专用通道扩展信息}({@link DescribeDirectConnectTunnelExtraRequest 请求参数}): {@link DescribeDirectConnectTunnelExtraResponse 返回参数} */
  DescribeDirectConnectTunnelExtra(data: DescribeDirectConnectTunnelExtraRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectTunnelExtraResponse>;
  /** {@link DescribeDirectConnectTunnels 查询专用通道列表}({@link DescribeDirectConnectTunnelsRequest 请求参数}): {@link DescribeDirectConnectTunnelsResponse 返回参数} */
  DescribeDirectConnectTunnels(data?: DescribeDirectConnectTunnelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectTunnelsResponse>;
  /** {@link DescribeDirectConnects 查询物理专线列表}({@link DescribeDirectConnectsRequest 请求参数}): {@link DescribeDirectConnectsResponse 返回参数} */
  DescribeDirectConnects(data?: DescribeDirectConnectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectsResponse>;
  /** {@link DescribeInternetAddress 获取用户互联网公网地址信息}({@link DescribeInternetAddressRequest 请求参数}): {@link DescribeInternetAddressResponse 返回参数} */
  DescribeInternetAddress(data?: DescribeInternetAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInternetAddressResponse>;
  /** {@link DescribeInternetAddressQuota 获取互联网公网地址配额}({@link DescribeInternetAddressQuotaRequest 请求参数}): {@link DescribeInternetAddressQuotaResponse 返回参数} */
  DescribeInternetAddressQuota(data?: DescribeInternetAddressQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInternetAddressQuotaResponse>;
  /** {@link DescribeInternetAddressStatistics 获取用户互联网公网地址统计信息}({@link DescribeInternetAddressStatisticsRequest 请求参数}): {@link DescribeInternetAddressStatisticsResponse 返回参数} */
  DescribeInternetAddressStatistics(data?: DescribeInternetAddressStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInternetAddressStatisticsResponse>;
  /** {@link DescribePublicDirectConnectTunnelRoutes 查询互联网通道路由列表}({@link DescribePublicDirectConnectTunnelRoutesRequest 请求参数}): {@link DescribePublicDirectConnectTunnelRoutesResponse 返回参数} */
  DescribePublicDirectConnectTunnelRoutes(data: DescribePublicDirectConnectTunnelRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicDirectConnectTunnelRoutesResponse>;
  /** {@link DisableInternetAddress 停用公网互联网地址}({@link DisableInternetAddressRequest 请求参数}): {@link DisableInternetAddressResponse 返回参数} */
  DisableInternetAddress(data: DisableInternetAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisableInternetAddressResponse>;
  /** {@link EnableInternetAddress 启用互联网公网地址}({@link EnableInternetAddressRequest 请求参数}): {@link EnableInternetAddressResponse 返回参数} */
  EnableInternetAddress(data: EnableInternetAddressRequest, config?: AxiosRequestConfig): AxiosPromise<EnableInternetAddressResponse>;
  /** {@link ModifyDirectConnectAttribute 修改物理专线属性}({@link ModifyDirectConnectAttributeRequest 请求参数}): {@link ModifyDirectConnectAttributeResponse 返回参数} */
  ModifyDirectConnectAttribute(data: ModifyDirectConnectAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDirectConnectAttributeResponse>;
  /** {@link ModifyDirectConnectTunnelAttribute 修改专用通道属性}({@link ModifyDirectConnectTunnelAttributeRequest 请求参数}): {@link ModifyDirectConnectTunnelAttributeResponse 返回参数} */
  ModifyDirectConnectTunnelAttribute(data: ModifyDirectConnectTunnelAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDirectConnectTunnelAttributeResponse>;
  /** {@link ModifyDirectConnectTunnelExtra 修改专用通道扩展信息}({@link ModifyDirectConnectTunnelExtraRequest 请求参数}): {@link ModifyDirectConnectTunnelExtraResponse 返回参数} */
  ModifyDirectConnectTunnelExtra(data: ModifyDirectConnectTunnelExtraRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDirectConnectTunnelExtraResponse>;
  /** {@link RejectDirectConnectTunnel 拒绝专用通道申请}({@link RejectDirectConnectTunnelRequest 请求参数}): {@link RejectDirectConnectTunnelResponse 返回参数} */
  RejectDirectConnectTunnel(data: RejectDirectConnectTunnelRequest, config?: AxiosRequestConfig): AxiosPromise<RejectDirectConnectTunnelResponse>;
  /** {@link ReleaseInternetAddress 释放互联网地址}({@link ReleaseInternetAddressRequest 请求参数}): {@link ReleaseInternetAddressResponse 返回参数} */
  ReleaseInternetAddress(data: ReleaseInternetAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseInternetAddressResponse>;
}

export declare type Versions = ["2018-04-10"];

export default Dc;
