/// <reference types="node" />

import { BinaryLike } from "crypto";
import { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosRequestHeaders, AxiosResponseHeaders } from "axios";

import Aa, { Versions as AaVersions } from "./aa";
import Aai, { Versions as AaiVersions } from "./aai";
import Acp, { Versions as AcpVersions } from "./acp";
import Advisor, { Versions as AdvisorVersions } from "./advisor";
import Af, { Versions as AfVersions } from "./af";
import Afc, { Versions as AfcVersions } from "./afc";
import Ame, { Versions as AmeVersions } from "./ame";
import Ams, { Versions as AmsVersions } from "./ams";
import Antiddos, { Versions as AntiddosVersions } from "./antiddos";
import Apcas, { Versions as ApcasVersions } from "./apcas";
import Ape, { Versions as ApeVersions } from "./ape";
import Api, { Versions as ApiVersions } from "./api";
import Apigateway, { Versions as ApigatewayVersions } from "./apigateway";
import Apm, { Versions as ApmVersions } from "./apm";
import Asr, { Versions as AsrVersions } from "./asr";
import Asw, { Versions as AswVersions } from "./asw";
import As, { Versions as AsVersions } from "./as";
import Ba, { Versions as BaVersions } from "./ba";
import Batch, { Versions as BatchVersions } from "./batch";
import Bda, { Versions as BdaVersions } from "./bda";
import Bi, { Versions as BiVersions } from "./bi";
import Billing, { Versions as BillingVersions } from "./billing";
import Bizlive, { Versions as BizliveVersions } from "./bizlive";
import Bm, { Versions as BmVersions } from "./bm";
import Bma, { Versions as BmaVersions } from "./bma";
import Bmeip, { Versions as BmeipVersions } from "./bmeip";
import Bmlb, { Versions as BmlbVersions } from "./bmlb";
import Bmvpc, { Versions as BmvpcVersions } from "./bmvpc";
import Bpaas, { Versions as BpaasVersions } from "./bpaas";
import Bri, { Versions as BriVersions } from "./bri";
import Bsca, { Versions as BscaVersions } from "./bsca";
import Btoe, { Versions as BtoeVersions } from "./btoe";
import Cam, { Versions as CamVersions } from "./cam";
import Captcha, { Versions as CaptchaVersions } from "./captcha";
import Car, { Versions as CarVersions } from "./car";
import Casb, { Versions as CasbVersions } from "./casb";
import Cat, { Versions as CatVersions } from "./cat";
import Cbs, { Versions as CbsVersions } from "./cbs";
import Ccc, { Versions as CccVersions } from "./ccc";
import Cdb, { Versions as CdbVersions } from "./cdb";
import Cdc, { Versions as CdcVersions } from "./cdc";
import Cdn, { Versions as CdnVersions } from "./cdn";
import Cds, { Versions as CdsVersions } from "./cds";
import Cfg, { Versions as CfgVersions } from "./cfg";
import Cfs, { Versions as CfsVersions } from "./cfs";
import Cfw, { Versions as CfwVersions } from "./cfw";
import Chdfs, { Versions as ChdfsVersions } from "./chdfs";
import Ciam, { Versions as CiamVersions } from "./ciam";
import Cii, { Versions as CiiVersions } from "./cii";
import Cim, { Versions as CimVersions } from "./cim";
import Cis, { Versions as CisVersions } from "./cis";
import Ckafka, { Versions as CkafkaVersions } from "./ckafka";
import Clb, { Versions as ClbVersions } from "./clb";
import Cloudaudit, { Versions as CloudauditVersions } from "./cloudaudit";
import Cloudhsm, { Versions as CloudhsmVersions } from "./cloudhsm";
import Cloudstudio, { Versions as CloudstudioVersions } from "./cloudstudio";
import Cls, { Versions as ClsVersions } from "./cls";
import Cme, { Versions as CmeVersions } from "./cme";
import Cmq, { Versions as CmqVersions } from "./cmq";
import Cms, { Versions as CmsVersions } from "./cms";
import Cpdp, { Versions as CpdpVersions } from "./cpdp";
import Cr, { Versions as CrVersions } from "./cr";
import Cvm, { Versions as CvmVersions } from "./cvm";
import Cwp, { Versions as CwpVersions } from "./cwp";
import Cws, { Versions as CwsVersions } from "./cws";
import Cynosdb, { Versions as CynosdbVersions } from "./cynosdb";
import Dasb, { Versions as DasbVersions } from "./dasb";
import Dataintegration, { Versions as DataintegrationVersions } from "./dataintegration";
import Dayu, { Versions as DayuVersions } from "./dayu";
import Dbbrain, { Versions as DbbrainVersions } from "./dbbrain";
import Dbdc, { Versions as DbdcVersions } from "./dbdc";
import Dc, { Versions as DcVersions } from "./dc";
import Dcdb, { Versions as DcdbVersions } from "./dcdb";
import Dlc, { Versions as DlcVersions } from "./dlc";
import Dnspod, { Versions as DnspodVersions } from "./dnspod";
import Domain, { Versions as DomainVersions } from "./domain";
import Drm, { Versions as DrmVersions } from "./drm";
import Ds, { Versions as DsVersions } from "./ds";
import Dtf, { Versions as DtfVersions } from "./dtf";
import Dts, { Versions as DtsVersions } from "./dts";
import Eb, { Versions as EbVersions } from "./eb";
import Ecc, { Versions as EccVersions } from "./ecc";
import Ecdn, { Versions as EcdnVersions } from "./ecdn";
import Ecm, { Versions as EcmVersions } from "./ecm";
import Eiam, { Versions as EiamVersions } from "./eiam";
import Eis, { Versions as EisVersions } from "./eis";
import Emr, { Versions as EmrVersions } from "./emr";
import Es, { Versions as EsVersions } from "./es";
import Ess, { Versions as EssVersions } from "./ess";
import Essbasic, { Versions as EssbasicVersions } from "./essbasic";
import Facefusion, { Versions as FacefusionVersions } from "./facefusion";
import Faceid, { Versions as FaceidVersions } from "./faceid";
import Fmu, { Versions as FmuVersions } from "./fmu";
import Ft, { Versions as FtVersions } from "./ft";
import Gaap, { Versions as GaapVersions } from "./gaap";
import Gme, { Versions as GmeVersions } from "./gme";
import Gpm, { Versions as GpmVersions } from "./gpm";
import Gs, { Versions as GsVersions } from "./gs";
import Gse, { Versions as GseVersions } from "./gse";
import Habo, { Versions as HaboVersions } from "./habo";
import Hcm, { Versions as HcmVersions } from "./hcm";
import Iai, { Versions as IaiVersions } from "./iai";
import Ic, { Versions as IcVersions } from "./ic";
import Icr, { Versions as IcrVersions } from "./icr";
import Ie, { Versions as IeVersions } from "./ie";
import Iecp, { Versions as IecpVersions } from "./iecp";
import Iir, { Versions as IirVersions } from "./iir";
import Ims, { Versions as ImsVersions } from "./ims";
import Iot, { Versions as IotVersions } from "./iot";
import Iotcloud, { Versions as IotcloudVersions } from "./iotcloud";
import Iotexplorer, { Versions as IotexplorerVersions } from "./iotexplorer";
import Iottid, { Versions as IottidVersions } from "./iottid";
import Iotvideo, { Versions as IotvideoVersions } from "./iotvideo";
import Iotvideoindustry, { Versions as IotvideoindustryVersions } from "./iotvideoindustry";
import Irp, { Versions as IrpVersions } from "./irp";
import Ivld, { Versions as IvldVersions } from "./ivld";
import Kms, { Versions as KmsVersions } from "./kms";
import Lcic, { Versions as LcicVersions } from "./lcic";
import Lighthouse, { Versions as LighthouseVersions } from "./lighthouse";
import Live, { Versions as LiveVersions } from "./live";
import Lowcode, { Versions as LowcodeVersions } from "./lowcode";
import Lp, { Versions as LpVersions } from "./lp";
import Mariadb, { Versions as MariadbVersions } from "./mariadb";
import Market, { Versions as MarketVersions } from "./market";
import Memcached, { Versions as MemcachedVersions } from "./memcached";
import Mgobe, { Versions as MgobeVersions } from "./mgobe";
import Mmps, { Versions as MmpsVersions } from "./mmps";
import Mna, { Versions as MnaVersions } from "./mna";
import Mongodb, { Versions as MongodbVersions } from "./mongodb";
import Monitor, { Versions as MonitorVersions } from "./monitor";
import Mps, { Versions as MpsVersions } from "./mps";
import Mrs, { Versions as MrsVersions } from "./mrs";
import Ms, { Versions as MsVersions } from "./ms";
import Msp, { Versions as MspVersions } from "./msp";
import Mvj, { Versions as MvjVersions } from "./mvj";
import Nlp, { Versions as NlpVersions } from "./nlp";
import Npp, { Versions as NppVersions } from "./npp";
import Oceanus, { Versions as OceanusVersions } from "./oceanus";
import Ocr, { Versions as OcrVersions } from "./ocr";
import Organization, { Versions as OrganizationVersions } from "./organization";
import Partners, { Versions as PartnersVersions } from "./partners";
import Pds, { Versions as PdsVersions } from "./pds";
import Postgres, { Versions as PostgresVersions } from "./postgres";
import Privatedns, { Versions as PrivatednsVersions } from "./privatedns";
import Pts, { Versions as PtsVersions } from "./pts";
import Rce, { Versions as RceVersions } from "./rce";
import Redis, { Versions as RedisVersions } from "./redis";
import Region, { Versions as RegionVersions } from "./region";
import Rkp, { Versions as RkpVersions } from "./rkp";
import Rp, { Versions as RpVersions } from "./rp";
import Rum, { Versions as RumVersions } from "./rum";
import Scf, { Versions as ScfVersions } from "./scf";
import Ses, { Versions as SesVersions } from "./ses";
import Smh, { Versions as SmhVersions } from "./smh";
import Smpn, { Versions as SmpnVersions } from "./smpn";
import Sms, { Versions as SmsVersions } from "./sms";
import Soe, { Versions as SoeVersions } from "./soe";
import Solar, { Versions as SolarVersions } from "./solar";
import Sqlserver, { Versions as SqlserverVersions } from "./sqlserver";
import Ssa, { Versions as SsaVersions } from "./ssa";
import Ssl, { Versions as SslVersions } from "./ssl";
import Sslpod, { Versions as SslpodVersions } from "./sslpod";
import Ssm, { Versions as SsmVersions } from "./ssm";
import Sts, { Versions as StsVersions } from "./sts";
import Taf, { Versions as TafVersions } from "./taf";
import Tag, { Versions as TagVersions } from "./tag";
import Tan, { Versions as TanVersions } from "./tan";
import Tat, { Versions as TatVersions } from "./tat";
import Tav, { Versions as TavVersions } from "./tav";
import Tbaas, { Versions as TbaasVersions } from "./tbaas";
import Tbm, { Versions as TbmVersions } from "./tbm";
import Tbp, { Versions as TbpVersions } from "./tbp";
import Tcaplusdb, { Versions as TcaplusdbVersions } from "./tcaplusdb";
import Tcb, { Versions as TcbVersions } from "./tcb";
import Tcbr, { Versions as TcbrVersions } from "./tcbr";
import Tcex, { Versions as TcexVersions } from "./tcex";
import Tci, { Versions as TciVersions } from "./tci";
import Tcm, { Versions as TcmVersions } from "./tcm";
import Tcr, { Versions as TcrVersions } from "./tcr";
import Tcss, { Versions as TcssVersions } from "./tcss";
import Tdcpg, { Versions as TdcpgVersions } from "./tdcpg";
import Tdid, { Versions as TdidVersions } from "./tdid";
import Tdmq, { Versions as TdmqVersions } from "./tdmq";
import Tds, { Versions as TdsVersions } from "./tds";
import Tem, { Versions as TemVersions } from "./tem";
import Teo, { Versions as TeoVersions } from "./teo";
import Thpc, { Versions as ThpcVersions } from "./thpc";
import Tia, { Versions as TiaVersions } from "./tia";
import Tic, { Versions as TicVersions } from "./tic";
import Ticm, { Versions as TicmVersions } from "./ticm";
import Tics, { Versions as TicsVersions } from "./tics";
import Tiems, { Versions as TiemsVersions } from "./tiems";
import Tiia, { Versions as TiiaVersions } from "./tiia";
import Tione, { Versions as TioneVersions } from "./tione";
import Tiw, { Versions as TiwVersions } from "./tiw";
import Tke, { Versions as TkeVersions } from "./tke";
import Tkgdq, { Versions as TkgdqVersions } from "./tkgdq";
import Tms, { Versions as TmsVersions } from "./tms";
import Tmt, { Versions as TmtVersions } from "./tmt";
import Trp, { Versions as TrpVersions } from "./trp";
import Trtc, { Versions as TrtcVersions } from "./trtc";
import Tse, { Versions as TseVersions } from "./tse";
import Tsf, { Versions as TsfVersions } from "./tsf";
import Tsw, { Versions as TswVersions } from "./tsw";
import Tts, { Versions as TtsVersions } from "./tts";
import Ump, { Versions as UmpVersions } from "./ump";
import Vm, { Versions as VmVersions } from "./vm";
import Vms, { Versions as VmsVersions } from "./vms";
import Vod, { Versions as VodVersions } from "./vod";
import Vpc, { Versions as VpcVersions } from "./vpc";
import Waf, { Versions as WafVersions } from "./waf";
import Wav, { Versions as WavVersions } from "./wav";
import Wedata, { Versions as WedataVersions } from "./wedata";
import Wss, { Versions as WssVersions } from "./wss";
import Yinsuda, { Versions as YinsudaVersions } from "./yinsuda";
import Youmall, { Versions as YoumallVersions } from "./youmall";
import Yunjing, { Versions as YunjingVersions } from "./yunjing";
import Yunsou, { Versions as YunsouVersions } from "./yunsou";
import Zj, { Versions as ZjVersions } from "./zj";

export declare type SERVICE_VERSIONS = {
  aa: AaVersions,
  aai: AaiVersions,
  acp: AcpVersions,
  advisor: AdvisorVersions,
  af: AfVersions,
  afc: AfcVersions,
  ame: AmeVersions,
  ams: AmsVersions,
  antiddos: AntiddosVersions,
  apcas: ApcasVersions,
  ape: ApeVersions,
  api: ApiVersions,
  apigateway: ApigatewayVersions,
  apm: ApmVersions,
  asr: AsrVersions,
  asw: AswVersions,
  as: AsVersions,
  ba: BaVersions,
  batch: BatchVersions,
  bda: BdaVersions,
  bi: BiVersions,
  billing: BillingVersions,
  bizlive: BizliveVersions,
  bm: BmVersions,
  bma: BmaVersions,
  bmeip: BmeipVersions,
  bmlb: BmlbVersions,
  bmvpc: BmvpcVersions,
  bpaas: BpaasVersions,
  bri: BriVersions,
  bsca: BscaVersions,
  btoe: BtoeVersions,
  cam: CamVersions,
  captcha: CaptchaVersions,
  car: CarVersions,
  casb: CasbVersions,
  cat: CatVersions,
  cbs: CbsVersions,
  ccc: CccVersions,
  cdb: CdbVersions,
  cdc: CdcVersions,
  cdn: CdnVersions,
  cds: CdsVersions,
  cfg: CfgVersions,
  cfs: CfsVersions,
  cfw: CfwVersions,
  chdfs: ChdfsVersions,
  ciam: CiamVersions,
  cii: CiiVersions,
  cim: CimVersions,
  cis: CisVersions,
  ckafka: CkafkaVersions,
  clb: ClbVersions,
  cloudaudit: CloudauditVersions,
  cloudhsm: CloudhsmVersions,
  cloudstudio: CloudstudioVersions,
  cls: ClsVersions,
  cme: CmeVersions,
  cmq: CmqVersions,
  cms: CmsVersions,
  cpdp: CpdpVersions,
  cr: CrVersions,
  cvm: CvmVersions,
  cwp: CwpVersions,
  cws: CwsVersions,
  cynosdb: CynosdbVersions,
  dasb: DasbVersions,
  dataintegration: DataintegrationVersions,
  dayu: DayuVersions,
  dbbrain: DbbrainVersions,
  dbdc: DbdcVersions,
  dc: DcVersions,
  dcdb: DcdbVersions,
  dlc: DlcVersions,
  dnspod: DnspodVersions,
  domain: DomainVersions,
  drm: DrmVersions,
  ds: DsVersions,
  dtf: DtfVersions,
  dts: DtsVersions,
  eb: EbVersions,
  ecc: EccVersions,
  ecdn: EcdnVersions,
  ecm: EcmVersions,
  eiam: EiamVersions,
  eis: EisVersions,
  emr: EmrVersions,
  es: EsVersions,
  ess: EssVersions,
  essbasic: EssbasicVersions,
  facefusion: FacefusionVersions,
  faceid: FaceidVersions,
  fmu: FmuVersions,
  ft: FtVersions,
  gaap: GaapVersions,
  gme: GmeVersions,
  gpm: GpmVersions,
  gs: GsVersions,
  gse: GseVersions,
  habo: HaboVersions,
  hcm: HcmVersions,
  iai: IaiVersions,
  ic: IcVersions,
  icr: IcrVersions,
  ie: IeVersions,
  iecp: IecpVersions,
  iir: IirVersions,
  ims: ImsVersions,
  iot: IotVersions,
  iotcloud: IotcloudVersions,
  iotexplorer: IotexplorerVersions,
  iottid: IottidVersions,
  iotvideo: IotvideoVersions,
  iotvideoindustry: IotvideoindustryVersions,
  irp: IrpVersions,
  ivld: IvldVersions,
  kms: KmsVersions,
  lcic: LcicVersions,
  lighthouse: LighthouseVersions,
  live: LiveVersions,
  lowcode: LowcodeVersions,
  lp: LpVersions,
  mariadb: MariadbVersions,
  market: MarketVersions,
  memcached: MemcachedVersions,
  mgobe: MgobeVersions,
  mmps: MmpsVersions,
  mna: MnaVersions,
  mongodb: MongodbVersions,
  monitor: MonitorVersions,
  mps: MpsVersions,
  mrs: MrsVersions,
  ms: MsVersions,
  msp: MspVersions,
  mvj: MvjVersions,
  nlp: NlpVersions,
  npp: NppVersions,
  oceanus: OceanusVersions,
  ocr: OcrVersions,
  organization: OrganizationVersions,
  partners: PartnersVersions,
  pds: PdsVersions,
  postgres: PostgresVersions,
  privatedns: PrivatednsVersions,
  pts: PtsVersions,
  rce: RceVersions,
  redis: RedisVersions,
  region: RegionVersions,
  rkp: RkpVersions,
  rp: RpVersions,
  rum: RumVersions,
  scf: ScfVersions,
  ses: SesVersions,
  smh: SmhVersions,
  smpn: SmpnVersions,
  sms: SmsVersions,
  soe: SoeVersions,
  solar: SolarVersions,
  sqlserver: SqlserverVersions,
  ssa: SsaVersions,
  ssl: SslVersions,
  sslpod: SslpodVersions,
  ssm: SsmVersions,
  sts: StsVersions,
  taf: TafVersions,
  tag: TagVersions,
  tan: TanVersions,
  tat: TatVersions,
  tav: TavVersions,
  tbaas: TbaasVersions,
  tbm: TbmVersions,
  tbp: TbpVersions,
  tcaplusdb: TcaplusdbVersions,
  tcb: TcbVersions,
  tcbr: TcbrVersions,
  tcex: TcexVersions,
  tci: TciVersions,
  tcm: TcmVersions,
  tcr: TcrVersions,
  tcss: TcssVersions,
  tdcpg: TdcpgVersions,
  tdid: TdidVersions,
  tdmq: TdmqVersions,
  tds: TdsVersions,
  tem: TemVersions,
  teo: TeoVersions,
  thpc: ThpcVersions,
  tia: TiaVersions,
  tic: TicVersions,
  ticm: TicmVersions,
  tics: TicsVersions,
  tiems: TiemsVersions,
  tiia: TiiaVersions,
  tione: TioneVersions,
  tiw: TiwVersions,
  tke: TkeVersions,
  tkgdq: TkgdqVersions,
  tms: TmsVersions,
  tmt: TmtVersions,
  trp: TrpVersions,
  trtc: TrtcVersions,
  tse: TseVersions,
  tsf: TsfVersions,
  tsw: TswVersions,
  tts: TtsVersions,
  ump: UmpVersions,
  vm: VmVersions,
  vms: VmsVersions,
  vod: VodVersions,
  vpc: VpcVersions,
  waf: WafVersions,
  wav: WavVersions,
  wedata: WedataVersions,
  wss: WssVersions,
  yinsuda: YinsudaVersions,
  youmall: YoumallVersions,
  yunjing: YunjingVersions,
  yunsou: YunsouVersions,
  zj: ZjVersions,
};

declare interface CloudServiceActions {
  (): string[];
  [S: string]: (data?: any, config?: AxiosRequestConfig) => AxiosPromise;
}

declare type CloudServices = {
  [K in keyof SERVICE_VERSIONS]: CloudServiceActions;
}

declare interface CloudInstance {
  new (SecretId: string, SecretKey: BinaryLike, Token?: string, Regin?: string): TenYun;

  get signer(): <T = BinaryLike>(data: T, headers: AxiosRequestHeaders) => T;

  get verifier(): <T = object | Buffer>(data: T, headers: AxiosResponseHeaders) => T;

  get serviceGetter(): () => CloudServices;

  get actionGetter(): () => CloudServiceActions;

  get client(): AxiosInstance;
}

declare type TenYun = CloudInstance & CloudServices & {
  /** [活动防刷](https://cloud.tencent.com/document/product/1189) */
  aa: Aa,
  aai: Aai,
  /** [应用合规平台](https://cloud.tencent.com/document/product/1553) */
  acp: Acp,
  /** [云顾问](https://cloud.tencent.com/document/product/1264) */
  advisor: Advisor,
  /** [借贷反欺诈](https://cloud.tencent.com/document/product/668) */
  af: Af,
  /** [定制建模](https://cloud.tencent.com/document/product/1029) */
  afc: Afc,
  /** [正版曲库直通车](https://cloud.tencent.com/document/product/1155) */
  ame: Ame,
  /** [音频内容检测](https://cloud.tencent.com/document/product/1219) */
  ams: Ams,
  /** [DDoS 防护](https://cloud.tencent.com/document/product/1021) */
  antiddos: Antiddos,
  /** [汽车精准获客服务](https://cloud.tencent.com/document/product/1244) */
  apcas: Apcas,
  /** [正版图库直通车](https://cloud.tencent.com/document/product/1181) */
  ape: Ape,
  /** [云 API](https://cloud.tencent.com/document/product/1278) */
  api: Api,
  /** [API网关](https://cloud.tencent.com/document/product/628) */
  apigateway: Apigateway,
  /** [应用性能观测](https://cloud.tencent.com/document/product/1463) */
  apm: Apm,
  /** [语音识别](https://cloud.tencent.com/document/product/1093) */
  asr: Asr,
  /** [应用与服务编排工作流](https://cloud.tencent.com/document/product/1272) */
  asw: Asw,
  /** [弹性伸缩](https://cloud.tencent.com/document/product/377) */
  as: As,
  /** [网站备案](https://cloud.tencent.com/document/product/243) */
  ba: Ba,
  /** [批量计算](https://cloud.tencent.com/document/product/599) */
  batch: Batch,
  /** [人体分析](https://cloud.tencent.com/document/product/1208) */
  bda: Bda,
  /** [商业智能分析 BI](https://cloud.tencent.com/document/product/590) */
  bi: Bi,
  /** [计费相关](https://cloud.tencent.com/document/product/555) */
  billing: Billing,
  /** 商业直播 */
  bizlive: Bizlive,
  /** [黑石物理服务器1.0](https://cloud.tencent.com/document/product/386) */
  bm: Bm,
  /** [品牌经营管家](https://cloud.tencent.com/document/product/1296) */
  bma: Bma,
  /** [黑石弹性公网IP](https://cloud.tencent.com/document/product/1028) */
  bmeip: Bmeip,
  /** [黑石负载均衡](https://cloud.tencent.com/document/product/1027) */
  bmlb: Bmlb,
  /** [黑石私有网络](https://cloud.tencent.com/document/product/1024) */
  bmvpc: Bmvpc,
  /** [商业流程服务](https://cloud.tencent.com/document/product/1083) */
  bpaas: Bpaas,
  /** [业务风险情报](https://cloud.tencent.com/document/product/1064) */
  bri: Bri,
  /** [二进制软件成分分析](https://cloud.tencent.com/document/product/1483) */
  bsca: Bsca,
  /** [区块链可信取证](https://cloud.tencent.com/document/product/1259) */
  btoe: Btoe,
  /** [访问管理](https://cloud.tencent.com/document/product/598) */
  cam: Cam,
  /** [验证码](https://cloud.tencent.com/document/product/1110) */
  captcha: Captcha,
  /** [应用云渲染](https://cloud.tencent.com/document/product/1547) */
  car: Car,
  /** [云数据加密代理网关](https://cloud.tencent.com/document/product/1303) */
  casb: Casb,
  /** [云拨测](https://cloud.tencent.com/document/product/280) */
  cat: Cat,
  /** [云硬盘](https://cloud.tencent.com/document/product/362) */
  cbs: Cbs,
  /** [云呼叫中心](https://cloud.tencent.com/document/product/679) */
  ccc: Ccc,
  /** [云数据库 MySQL](https://cloud.tencent.com/document/product/236) */
  cdb: Cdb,
  /** [本地专用集群](https://cloud.tencent.com/document/product/1346) */
  cdc: Cdc,
  /** [内容分发网络](https://cloud.tencent.com/document/product/228) */
  cdn: Cdn,
  /** [数据安全审计](https://cloud.tencent.com/document/product/856) */
  cds: Cds,
  /** [混沌演练平台](https://cloud.tencent.com/document/product/1500) */
  cfg: Cfg,
  /** [文件存储](https://cloud.tencent.com/document/product/582) */
  cfs: Cfs,
  /** [云防火墙](https://cloud.tencent.com/document/product/1132) */
  cfw: Cfw,
  /** [云 HDFS](https://cloud.tencent.com/document/product/1105) */
  chdfs: Chdfs,
  /** [账号风控平台](https://cloud.tencent.com/document/product/1441) */
  ciam: Ciam,
  /** [智能保险助手](https://cloud.tencent.com/document/product/1368) */
  cii: Cii,
  cim: Cim,
  cis: Cis,
  /** [消息队列 Ckafka](https://cloud.tencent.com/document/product/597) */
  ckafka: Ckafka,
  /** [负载均衡](https://cloud.tencent.com/document/product/214) */
  clb: Clb,
  /** [云审计](https://cloud.tencent.com/document/product/629) */
  cloudaudit: Cloudaudit,
  /** [云加密机](https://cloud.tencent.com/document/product/639) */
  cloudhsm: Cloudhsm,
  /** [云端 IDE](https://cloud.tencent.com/document/product/1039) */
  cloudstudio: Cloudstudio,
  /** [日志服务](https://cloud.tencent.com/document/product/614) */
  cls: Cls,
  /** [多媒体创作引擎](https://cloud.tencent.com/document/product/1156) */
  cme: Cme,
  /** [消息队列 CMQ](https://cloud.tencent.com/document/product/406) */
  cmq: Cmq,
  /** 内容安全 */
  cms: Cms,
  /** [企业收付平台](https://cloud.tencent.com/document/product/1122) */
  cpdp: Cpdp,
  /** [金融联络机器人](https://cloud.tencent.com/document/product/656) */
  cr: Cr,
  /** [云服务器](https://cloud.tencent.com/document/product/213) */
  cvm: Cvm,
  /** [主机安全](https://cloud.tencent.com/document/product/296) */
  cwp: Cwp,
  /** 漏洞扫描服务 */
  cws: Cws,
  /** [云原生数据库 TDSQL-C](https://cloud.tencent.com/document/product/1003) */
  cynosdb: Cynosdb,
  /** [堡垒机](https://cloud.tencent.com/document/product/1025) */
  dasb: Dasb,
  /** [数据接入平台](https://cloud.tencent.com/document/product/1591) */
  dataintegration: Dataintegration,
  /** [DDoS 高防包](https://cloud.tencent.com/document/product/1021) */
  dayu: Dayu,
  /** [数据库智能管家 DBbrain](https://cloud.tencent.com/document/product/1130) */
  dbbrain: Dbbrain,
  /** [云数据库独享集群](https://cloud.tencent.com/document/product/1322) */
  dbdc: Dbdc,
  /** [专线接入](https://cloud.tencent.com/document/product/216) */
  dc: Dc,
  /** [分布式数据库 TDSQL](https://cloud.tencent.com/document/product/557) */
  dcdb: Dcdb,
  /** [数据湖计算](https://cloud.tencent.com/document/product/1342) */
  dlc: Dlc,
  /** [DNSPod](https://cloud.tencent.com/document/product/1427) */
  dnspod: Dnspod,
  /** [域名注册](https://cloud.tencent.com/document/product/242) */
  domain: Domain,
  /** [数字版权管理](https://cloud.tencent.com/document/product/1000) */
  drm: Drm,
  /** [电子合同服务](https://cloud.tencent.com/document/product/869) */
  ds: Ds,
  /** [分布式事务](https://cloud.tencent.com/document/product/1224) */
  dtf: Dtf,
  /** [数据传输服务](https://cloud.tencent.com/document/product/571) */
  dts: Dts,
  /** [事件总线](https://cloud.tencent.com/document/product/1359) */
  eb: Eb,
  /** [英文作文批改](https://cloud.tencent.com/document/product/1076) */
  ecc: Ecc,
  /** [全站加速网络](https://cloud.tencent.com/document/product/570) */
  ecdn: Ecdn,
  /** [边缘计算机器](https://cloud.tencent.com/document/product/1108) */
  ecm: Ecm,
  /** [数字身份管控平台（员工版）](https://cloud.tencent.com/document/product/1442) */
  eiam: Eiam,
  /** [企业集成服务](https://cloud.tencent.com/document/product/1270) */
  eis: Eis,
  /** [弹性 MapReduce](https://cloud.tencent.com/document/product/589) */
  emr: Emr,
  /** [Elasticsearch Service](https://cloud.tencent.com/document/product/845) */
  es: Es,
  /** [电子签服务](https://cloud.tencent.com/document/product/1323) */
  ess: Ess,
  /** [腾讯电子签（基础版）](https://cloud.tencent.com/document/product/1420) */
  essbasic: Essbasic,
  /** [人脸融合](https://cloud.tencent.com/document/product/670) */
  facefusion: Facefusion,
  /** [人脸核身](https://cloud.tencent.com/document/product/1007) */
  faceid: Faceid,
  /** [人脸试妆](https://cloud.tencent.com/document/product/1172) */
  fmu: Fmu,
  /** [人像变换](https://cloud.tencent.com/document/product/1202) */
  ft: Ft,
  /** [全球应用加速](https://cloud.tencent.com/document/product/608) */
  gaap: Gaap,
  /** [游戏多媒体引擎](https://cloud.tencent.com/document/product/607) */
  gme: Gme,
  /** [游戏玩家匹配](https://cloud.tencent.com/document/product/1294) */
  gpm: Gpm,
  /** [云游戏解决方案](https://cloud.tencent.com/document/product/1162) */
  gs: Gs,
  /** [游戏服务器伸缩](https://cloud.tencent.com/document/product/1165) */
  gse: Gse,
  habo: Habo,
  /** [数学作业批改](https://cloud.tencent.com/document/product/1004) */
  hcm: Hcm,
  /** [人脸识别](https://cloud.tencent.com/document/product/867) */
  iai: Iai,
  /** [物联卡](https://cloud.tencent.com/document/product/636) */
  ic: Ic,
  /** [对话机器人](https://cloud.tencent.com/document/product/1268) */
  icr: Icr,
  /** [智能编辑](https://cloud.tencent.com/document/product/1186) */
  ie: Ie,
  /** [物联网边缘计算平台](https://cloud.tencent.com/document/product/1118) */
  iecp: Iecp,
  /** [智能识图](https://cloud.tencent.com/document/product/1217) */
  iir: Iir,
  /** [图片内容安全](https://cloud.tencent.com/document/product/1125) */
  ims: Ims,
  /** [加速物联网套件](https://cloud.tencent.com/document/product/568) */
  iot: Iot,
  /** [物联网通信](https://cloud.tencent.com/document/product/634) */
  iotcloud: Iotcloud,
  /** [物联网开发平台](https://cloud.tencent.com/document/product/1081) */
  iotexplorer: Iotexplorer,
  /** [物联网设备身份认证](https://cloud.tencent.com/document/product/1086) */
  iottid: Iottid,
  /** [物联网智能视频服务](https://cloud.tencent.com/document/product/1131) */
  iotvideo: Iotvideo,
  /** [物联网智能视频服务（行业版）](https://cloud.tencent.com/document/product/1361) */
  iotvideoindustry: Iotvideoindustry,
  /** [智能推荐平台](https://cloud.tencent.com/document/product/1541) */
  irp: Irp,
  /** [视频智能标签](https://cloud.tencent.com/document/product/1509) */
  ivld: Ivld,
  /** [密钥管理系统](https://cloud.tencent.com/document/product/573) */
  kms: Kms,
  /** [低代码互动课堂](https://cloud.tencent.com/document/product/1639) */
  lcic: Lcic,
  /** [轻量应用服务器](https://cloud.tencent.com/document/product/1207) */
  lighthouse: Lighthouse,
  /** [云直播](https://cloud.tencent.com/document/product/267) */
  live: Live,
  /** [云开发低码](https://cloud.tencent.com/document/product/1301) */
  lowcode: Lowcode,
  /** [登录保护](https://cloud.tencent.com/document/product/1190) */
  lp: Lp,
  /** [云数据库 MariaDB](https://cloud.tencent.com/document/product/237) */
  mariadb: Mariadb,
  /** [云市场](https://cloud.tencent.com/document/product/306) */
  market: Market,
  /** [云数据库 Memcached](https://cloud.tencent.com/document/product/241) */
  memcached: Memcached,
  /** [游戏联机对战引擎](https://cloud.tencent.com/document/product/1038) */
  mgobe: Mgobe,
  /** [小程序安全](https://cloud.tencent.com/document/product/1223) */
  mmps: Mmps,
  /** [移动网络加速](https://cloud.tencent.com/document/product/1385) */
  mna: Mna,
  /** [云数据库 MongoDB](https://cloud.tencent.com/document/product/240) */
  mongodb: Mongodb,
  /** [云监控](https://cloud.tencent.com/document/product/248) */
  monitor: Monitor,
  /** [视频处理](https://cloud.tencent.com/document/product/862) */
  mps: Mps,
  /** [医疗报告结构化](https://cloud.tencent.com/document/product/1314) */
  mrs: Mrs,
  /** [移动应用安全](https://cloud.tencent.com/document/product/283) */
  ms: Ms,
  /** [迁移服务平台](https://cloud.tencent.com/document/product/659) */
  msp: Msp,
  /** 营销价值判断 */
  mvj: Mvj,
  /** [自然语言处理](https://cloud.tencent.com/document/product/271) */
  nlp: Nlp,
  /** 号码保护 */
  npp: Npp,
  /** [流计算 Oceanus](https://cloud.tencent.com/document/product/849) */
  oceanus: Oceanus,
  /** [文字识别](https://cloud.tencent.com/document/product/866) */
  ocr: Ocr,
  /** [企业组织](https://cloud.tencent.com/document/product/850) */
  organization: Organization,
  /** [渠道合作伙伴](https://cloud.tencent.com/document/product/563) */
  partners: Partners,
  /** [私域安全](https://cloud.tencent.com/document/product/1473) */
  pds: Pds,
  /** [云数据库 PostgreSQL](https://cloud.tencent.com/document/product/409) */
  postgres: Postgres,
  /** [私有域解析 Private DNS](https://cloud.tencent.com/document/product/1338) */
  privatedns: Privatedns,
  /** [云压测](https://cloud.tencent.com/document/product/1484) */
  pts: Pts,
  /** [全栈式风控引擎](https://cloud.tencent.com/document/product/1343) */
  rce: Rce,
  /** [云数据库 Redis](https://cloud.tencent.com/document/product/239) */
  redis: Redis,
  /** [地域管理系统](https://cloud.tencent.com/document/product/1596) */
  region: Region,
  /** [风险探针](https://cloud.tencent.com/document/product/1169) */
  rkp: Rkp,
  /** [注册保护](https://cloud.tencent.com/document/product/1191) */
  rp: Rp,
  /** [前端性能监控](https://cloud.tencent.com/document/product/1464) */
  rum: Rum,
  /** [云函数](https://cloud.tencent.com/document/product/583) */
  scf: Scf,
  /** [邮件推送](https://cloud.tencent.com/document/product/1288) */
  ses: Ses,
  /** [智能媒资托管](https://cloud.tencent.com/document/product/1339) */
  smh: Smh,
  /** [营销号码安全](https://cloud.tencent.com/document/product/1127) */
  smpn: Smpn,
  /** [短信](https://cloud.tencent.com/document/product/382) */
  sms: Sms,
  /** [智聆口语评测](https://cloud.tencent.com/document/product/884) */
  soe: Soe,
  /** 智汇零售 */
  solar: Solar,
  /** [云数据库 SQL Server](https://cloud.tencent.com/document/product/238) */
  sqlserver: Sqlserver,
  /** [安全运营中心](https://cloud.tencent.com/document/product/664) */
  ssa: Ssa,
  /** [证书](https://cloud.tencent.com/document/product/400) */
  ssl: Ssl,
  /** [SSL 证书监控](https://cloud.tencent.com/document/product/1084) */
  sslpod: Sslpod,
  /** [凭据管理系统](https://cloud.tencent.com/document/product/1140) */
  ssm: Ssm,
  /** [安全凭证服务](https://cloud.tencent.com/document/product/1312) */
  sts: Sts,
  /** [流量反欺诈](https://cloud.tencent.com/document/product/1031) */
  taf: Taf,
  /** [标签](https://cloud.tencent.com/document/product/651) */
  tag: Tag,
  /** [碳引擎](https://cloud.tencent.com/document/product/1498) */
  tan: Tan,
  /** [腾讯云自动化助手](https://cloud.tencent.com/document/product/1340) */
  tat: Tat,
  /** 文件检测 */
  tav: Tav,
  /** [TBaaS](https://cloud.tencent.com/document/product/663) */
  tbaas: Tbaas,
  tbm: Tbm,
  /** [腾讯智能对话平台](https://cloud.tencent.com/document/product/1060) */
  tbp: Tbp,
  /** [游戏数据库 TcaplusDB](https://cloud.tencent.com/document/product/596) */
  tcaplusdb: Tcaplusdb,
  /** [云开发 CloudBase](https://cloud.tencent.com/document/product/876) */
  tcb: Tcb,
  /** [云托管 CloudBase Run](https://cloud.tencent.com/document/product/1243) */
  tcbr: Tcbr,
  /** [腾讯云释义](https://cloud.tencent.com/document/product/1266) */
  tcex: Tcex,
  /** 腾讯智学课堂分析 */
  tci: Tci,
  /** [服务网格](https://cloud.tencent.com/document/product/1261) */
  tcm: Tcm,
  /** [容器镜像服务](https://cloud.tencent.com/document/product/1141) */
  tcr: Tcr,
  /** [容器安全服务](https://cloud.tencent.com/document/product/1285) */
  tcss: Tcss,
  /** [TDSQL-C PostgreSQL 版](https://cloud.tencent.com/document/product/1556) */
  tdcpg: Tdcpg,
  /** [分布式身份](https://cloud.tencent.com/document/product/1439) */
  tdid: Tdid,
  /** [分布式消息队列](https://cloud.tencent.com/document/product/1179) */
  tdmq: Tdmq,
  /** [设备安全](https://cloud.tencent.com/document/product/1628) */
  tds: Tds,
  /** [弹性微服务](https://cloud.tencent.com/document/product/1371) */
  tem: Tem,
  /** [边缘安全加速平台](https://cloud.tencent.com/document/product/1552) */
  teo: Teo,
  /** [高性能计算平台](https://cloud.tencent.com/document/product/1527) */
  thpc: Thpc,
  /** [智能钛机器学习](https://cloud.tencent.com/document/product/851) */
  tia: Tia,
  /** [腾讯云IaC平台](https://cloud.tencent.com/document/product/1213) */
  tic: Tic,
  /** [智能鉴黄](https://cloud.tencent.com/document/product/864) */
  ticm: Ticm,
  /** [威胁情报云查服务](https://cloud.tencent.com/document/product/1013) */
  tics: Tics,
  /** [腾讯云 TI 平台 TI-EMS](https://cloud.tencent.com/document/product/1120) */
  tiems: Tiems,
  /** [图像分析](https://cloud.tencent.com/document/product/865) */
  tiia: Tiia,
  /** [腾讯云 TI 平台 TI-ONE](https://cloud.tencent.com/document/product/851) */
  tione: Tione,
  /** [互动白板](https://cloud.tencent.com/document/product/1137) */
  tiw: Tiw,
  /** [容器服务](https://cloud.tencent.com/document/product/457) */
  tke: Tke,
  /** 腾讯知识图谱数据查询 */
  tkgdq: Tkgdq,
  /** [文本内容安全](https://cloud.tencent.com/document/product/1124) */
  tms: Tms,
  /** [机器翻译](https://cloud.tencent.com/document/product/551) */
  tmt: Tmt,
  /** [T-Sec-安心平台(RP)](https://cloud.tencent.com/document/product/1458) */
  trp: Trp,
  /** [实时音视频](https://cloud.tencent.com/document/product/647) */
  trtc: Trtc,
  /** [腾讯云微服务引擎](https://cloud.tencent.com/document/product/1364) */
  tse: Tse,
  /** [腾讯微服务平台 TSF](https://cloud.tencent.com/document/product/649) */
  tsf: Tsf,
  /** [腾讯微服务观测平台 TSW](https://cloud.tencent.com/document/product/1311) */
  tsw: Tsw,
  /** [语音合成](https://cloud.tencent.com/document/product/1073) */
  tts: Tts,
  /** [客流数字化平台](https://cloud.tencent.com/document/product/1320) */
  ump: Ump,
  /** [视频内容安全](https://cloud.tencent.com/document/product/1265) */
  vm: Vm,
  /** [语音消息](https://cloud.tencent.com/document/product/1128) */
  vms: Vms,
  /** [云点播](https://cloud.tencent.com/document/product/266) */
  vod: Vod,
  /** [私有网络](https://cloud.tencent.com/document/product/215) */
  vpc: Vpc,
  /** [Web 应用防火墙](https://cloud.tencent.com/document/product/627) */
  waf: Waf,
  /** [企业微信汽车行业版](https://cloud.tencent.com/document/product/1318) */
  wav: Wav,
  /** [数据开发治理平台 WeData](https://cloud.tencent.com/document/product/1267) */
  wedata: Wedata,
  /** SSL证书管理服务 */
  wss: Wss,
  /** [音速达直播音乐版权引擎](https://cloud.tencent.com/document/product/1592) */
  yinsuda: Yinsuda,
  youmall: Youmall,
  /** 主机安全 */
  yunjing: Yunjing,
  /** [腾讯云搜](https://cloud.tencent.com/document/product/270) */
  yunsou: Yunsou,
  /** 珠玑 */
  zj: Zj,
};

declare var TenYun: TenYun;

export default TenYun;
