import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

type Assembly = Partial<{
  definedTypes: Array<TypeInfo> | null;
  exportedTypes: Array<Type> | null;
  codeBase: string | null;
  entryPoint: MethodInfo;
  fullName: string | null;
  imageRuntimeVersion: string | null;
  isDynamic: boolean;
  location: string | null;
  reflectionOnly: boolean;
  isCollectible: boolean;
  isFullyTrusted: boolean;
  customAttributes: Array<CustomAttributeData> | null;
  escapedCodeBase: string | null;
  manifestModule: Module;
  modules: Array<Module> | null;
  globalAssemblyCache: boolean;
  hostContext: number;
  securityRuleSet: SecurityRuleSet;
}>;
type MemberTypes = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;
type ModuleHandle = Partial<{
  mdStreamVersion: number;
}>;
type MethodAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048
  | 4096
  | 8192
  | 16384
  | 32768
  | 53248;
type MethodImplAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 4096
  | 65535;
type CallingConventions = 1 | 2 | 3 | 32 | 64;
type RuntimeMethodHandle = Partial<{
  value: IntPtr;
}>;
type IntPtr = {};
type GenericParameterAttributes = 0 | 1 | 2 | 3 | 4 | 8 | 16 | 28;
type TypeAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 16
  | 24
  | 32
  | 128
  | 256
  | 1024
  | 2048
  | 4096
  | 8192
  | 16384
  | 65536
  | 131072
  | 196608
  | 262144
  | 264192
  | 1048576
  | 12582912;
type StructLayoutAttribute = Partial<{
  typeId: unknown;
  value: LayoutKind;
}>;
type LayoutKind = 0 | 2 | 3;
type RuntimeTypeHandle = Partial<{
  value: IntPtr;
}>;
type EventAttributes = 0 | 512 | 1024;
type ParameterAttributes =
  | 0
  | 1
  | 2
  | 4
  | 8
  | 16
  | 4096
  | 8192
  | 16384
  | 32768
  | 61440;
type ICustomAttributeProvider = {};
type FieldAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 4096
  | 8192
  | 32768
  | 38144;
type RuntimeFieldHandle = Partial<{
  value: IntPtr;
}>;
type PropertyAttributes = 0 | 512 | 1024 | 4096 | 8192 | 16384 | 32768 | 62464;
type SecurityRuleSet = 0 | 1 | 2;
type ConstructorInfo = Partial<{
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  attributes: MethodAttributes;
  methodImplementationFlags: MethodImplAttributes;
  callingConvention: CallingConventions;
  isAbstract: boolean;
  isConstructor: boolean;
  isFinal: boolean;
  isHideBySig: boolean;
  isSpecialName: boolean;
  isStatic: boolean;
  isVirtual: boolean;
  isAssembly: boolean;
  isFamily: boolean;
  isFamilyAndAssembly: boolean;
  isFamilyOrAssembly: boolean;
  isPrivate: boolean;
  isPublic: boolean;
  isConstructedGenericMethod: boolean;
  isGenericMethod: boolean;
  isGenericMethodDefinition: boolean;
  containsGenericParameters: boolean;
  methodHandle: RuntimeMethodHandle;
  isSecurityCritical: boolean;
  isSecuritySafeCritical: boolean;
  isSecurityTransparent: boolean;
  memberType: MemberTypes;
}>;
type CustomAttributeData = Partial<{
  attributeType: Type;
  constructor: ConstructorInfo;
  constructorArguments: Array<CustomAttributeTypedArgument> | null;
  namedArguments: Array<CustomAttributeNamedArgument> | null;
}>;
type CustomAttributeNamedArgument = Partial<{
  memberInfo: MemberInfo;
  typedValue: CustomAttributeTypedArgument;
  memberName: string | null;
  isField: boolean;
}>;
type CustomAttributeTypedArgument = Partial<{
  argumentType: Type;
  value: unknown;
}>;
type EventInfo = Partial<{
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  memberType: MemberTypes;
  attributes: EventAttributes;
  isSpecialName: boolean;
  addMethod: MethodInfo;
  removeMethod: MethodInfo;
  raiseMethod: MethodInfo;
  isMulticast: boolean;
  eventHandlerType: Type;
}>;
type Exception = Partial<{
  targetSite: MethodBase;
  message: string | null;
  data: {};
  innerException: Exception;
  helpLink: string | null;
  source: string | null;
  hResult: number;
  stackTrace: string | null;
}>;
type FieldInfo = Partial<{
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  memberType: MemberTypes;
  attributes: FieldAttributes;
  fieldType: Type;
  isInitOnly: boolean;
  isLiteral: boolean;
  isNotSerialized: boolean;
  isPinvokeImpl: boolean;
  isSpecialName: boolean;
  isStatic: boolean;
  isAssembly: boolean;
  isFamily: boolean;
  isFamilyAndAssembly: boolean;
  isFamilyOrAssembly: boolean;
  isPrivate: boolean;
  isPublic: boolean;
  isSecurityCritical: boolean;
  isSecuritySafeCritical: boolean;
  isSecurityTransparent: boolean;
  fieldHandle: RuntimeFieldHandle;
}>;
type MemberInfo = Partial<{
  memberType: MemberTypes;
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
}>;
type MethodBase = Partial<{
  memberType: MemberTypes;
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  attributes: MethodAttributes;
  methodImplementationFlags: MethodImplAttributes;
  callingConvention: CallingConventions;
  isAbstract: boolean;
  isConstructor: boolean;
  isFinal: boolean;
  isHideBySig: boolean;
  isSpecialName: boolean;
  isStatic: boolean;
  isVirtual: boolean;
  isAssembly: boolean;
  isFamily: boolean;
  isFamilyAndAssembly: boolean;
  isFamilyOrAssembly: boolean;
  isPrivate: boolean;
  isPublic: boolean;
  isConstructedGenericMethod: boolean;
  isGenericMethod: boolean;
  isGenericMethodDefinition: boolean;
  containsGenericParameters: boolean;
  methodHandle: RuntimeMethodHandle;
  isSecurityCritical: boolean;
  isSecuritySafeCritical: boolean;
  isSecurityTransparent: boolean;
}>;
type MethodInfo = Partial<{
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  attributes: MethodAttributes;
  methodImplementationFlags: MethodImplAttributes;
  callingConvention: CallingConventions;
  isAbstract: boolean;
  isConstructor: boolean;
  isFinal: boolean;
  isHideBySig: boolean;
  isSpecialName: boolean;
  isStatic: boolean;
  isVirtual: boolean;
  isAssembly: boolean;
  isFamily: boolean;
  isFamilyAndAssembly: boolean;
  isFamilyOrAssembly: boolean;
  isPrivate: boolean;
  isPublic: boolean;
  isConstructedGenericMethod: boolean;
  isGenericMethod: boolean;
  isGenericMethodDefinition: boolean;
  containsGenericParameters: boolean;
  methodHandle: RuntimeMethodHandle;
  isSecurityCritical: boolean;
  isSecuritySafeCritical: boolean;
  isSecurityTransparent: boolean;
  memberType: MemberTypes;
  returnParameter: ParameterInfo;
  returnType: Type;
  returnTypeCustomAttributes: ICustomAttributeProvider;
}>;
type Module = Partial<{
  assembly: Assembly;
  fullyQualifiedName: string | null;
  name: string | null;
  mdStreamVersion: number;
  moduleVersionId: string;
  scopeName: string | null;
  moduleHandle: ModuleHandle;
  customAttributes: Array<CustomAttributeData> | null;
  metadataToken: number;
}>;
type ParameterInfo = Partial<{
  attributes: ParameterAttributes;
  member: MemberInfo;
  name: string | null;
  parameterType: Type;
  position: number;
  isIn: boolean;
  isLcid: boolean;
  isOptional: boolean;
  isOut: boolean;
  isRetval: boolean;
  defaultValue: unknown;
  rawDefaultValue: unknown;
  hasDefaultValue: boolean;
  customAttributes: Array<CustomAttributeData> | null;
  metadataToken: number;
}>;
type PropertyInfo = Partial<{
  name: string | null;
  declaringType: Type;
  reflectedType: Type;
  module: Module;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  memberType: MemberTypes;
  propertyType: Type;
  attributes: PropertyAttributes;
  isSpecialName: boolean;
  canRead: boolean;
  canWrite: boolean;
  getMethod: MethodInfo;
  setMethod: MethodInfo;
}>;
type Type = Partial<{
  name: string | null;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  isInterface: boolean;
  memberType: MemberTypes;
  namespace: string | null;
  assemblyQualifiedName: string | null;
  fullName: string | null;
  assembly: Assembly;
  module: Module;
  isNested: boolean;
  declaringType: Type;
  declaringMethod: MethodBase;
  reflectedType: Type;
  underlyingSystemType: Type;
  isTypeDefinition: boolean;
  isArray: boolean;
  isByRef: boolean;
  isPointer: boolean;
  isConstructedGenericType: boolean;
  isGenericParameter: boolean;
  isGenericTypeParameter: boolean;
  isGenericMethodParameter: boolean;
  isGenericType: boolean;
  isGenericTypeDefinition: boolean;
  isSZArray: boolean;
  isVariableBoundArray: boolean;
  isByRefLike: boolean;
  isFunctionPointer: boolean;
  isUnmanagedFunctionPointer: boolean;
  hasElementType: boolean;
  genericTypeArguments: Array<Type> | null;
  genericParameterPosition: number;
  genericParameterAttributes: GenericParameterAttributes;
  attributes: TypeAttributes;
  isAbstract: boolean;
  isImport: boolean;
  isSealed: boolean;
  isSpecialName: boolean;
  isClass: boolean;
  isNestedAssembly: boolean;
  isNestedFamANDAssem: boolean;
  isNestedFamily: boolean;
  isNestedFamORAssem: boolean;
  isNestedPrivate: boolean;
  isNestedPublic: boolean;
  isNotPublic: boolean;
  isPublic: boolean;
  isAutoLayout: boolean;
  isExplicitLayout: boolean;
  isLayoutSequential: boolean;
  isAnsiClass: boolean;
  isAutoClass: boolean;
  isUnicodeClass: boolean;
  isCOMObject: boolean;
  isContextful: boolean;
  isEnum: boolean;
  isMarshalByRef: boolean;
  isPrimitive: boolean;
  isValueType: boolean;
  isSignatureType: boolean;
  isSecurityCritical: boolean;
  isSecuritySafeCritical: boolean;
  isSecurityTransparent: boolean;
  structLayoutAttribute: StructLayoutAttribute;
  typeInitializer: ConstructorInfo;
  typeHandle: RuntimeTypeHandle;
  guid: string;
  baseType: Type;
  isSerializable: boolean;
  containsGenericParameters: boolean;
  isVisible: boolean;
}>;
type TypeInfo = Partial<{
  name: string | null;
  customAttributes: Array<CustomAttributeData> | null;
  isCollectible: boolean;
  metadataToken: number;
  isInterface: boolean;
  memberType: MemberTypes;
  namespace: string | null;
  assemblyQualifiedName: string | null;
  fullName: string | null;
  assembly: Assembly;
  module: Module;
  isNested: boolean;
  declaringType: Type;
  declaringMethod: MethodBase;
  reflectedType: Type;
  underlyingSystemType: Type;
  isTypeDefinition: boolean;
  isArray: boolean;
  isByRef: boolean;
  isPointer: boolean;
  isConstructedGenericType: boolean;
  isGenericParameter: boolean;
  isGenericTypeParameter: boolean;
  isGenericMethodParameter: boolean;
  isGenericType: boolean;
  isGenericTypeDefinition: boolean;
  isSZArray: boolean;
  isVariableBoundArray: boolean;
  isByRefLike: boolean;
  isFunctionPointer: boolean;
  isUnmanagedFunctionPointer: boolean;
  hasElementType: boolean;
  genericTypeArguments: Array<Type> | null;
  genericParameterPosition: number;
  genericParameterAttributes: GenericParameterAttributes;
  attributes: TypeAttributes;
  isAbstract: boolean;
  isImport: boolean;
  isSealed: boolean;
  isSpecialName: boolean;
  isClass: boolean;
  isNestedAssembly: boolean;
  isNestedFamANDAssem: boolean;
  isNestedFamily: boolean;
  isNestedFamORAssem: boolean;
  isNestedPrivate: boolean;
  isNestedPublic: boolean;
  isNotPublic: boolean;
  isPublic: boolean;
  isAutoLayout: boolean;
  isExplicitLayout: boolean;
  isLayoutSequential: boolean;
  isAnsiClass: boolean;
  isAutoClass: boolean;
  isUnicodeClass: boolean;
  isCOMObject: boolean;
  isContextful: boolean;
  isEnum: boolean;
  isMarshalByRef: boolean;
  isPrimitive: boolean;
  isValueType: boolean;
  isSignatureType: boolean;
  isSecurityCritical: boolean;
  isSecuritySafeCritical: boolean;
  isSecurityTransparent: boolean;
  structLayoutAttribute: StructLayoutAttribute;
  typeInitializer: ConstructorInfo;
  typeHandle: RuntimeTypeHandle;
  guid: string;
  baseType: Type;
  isSerializable: boolean;
  containsGenericParameters: boolean;
  isVisible: boolean;
  genericTypeParameters: Array<Type> | null;
  declaredConstructors: Array<ConstructorInfo> | null;
  declaredEvents: Array<EventInfo> | null;
  declaredFields: Array<FieldInfo> | null;
  declaredMembers: Array<MemberInfo> | null;
  declaredMethods: Array<MethodInfo> | null;
  declaredNestedTypes: Array<TypeInfo> | null;
  declaredProperties: Array<PropertyInfo> | null;
  implementedInterfaces: Array<Type> | null;
}>;

const AppInsightsSearchParametersDTO = z
  .object({ query: z.string().nullable(), timespan: z.string().nullable() })
  .partial();
const APIResultDTO = z
  .object({
    isSuccess: z.boolean(),
    errorMessage: z.string().nullable(),
    message: z.string().nullable(),
    data: z.unknown().nullable(),
  })
  .partial();
const AppInsights_UserDetailsDTO = z
  .object({
    los: z.string().nullable(),
    organisation_SBU1: z.string().nullable(),
    employeeName: z.string().nullable(),
    email: z.string().nullable(),
    designation: z.string().nullable(),
  })
  .partial();
const DashboardInputDTO = z
  .object({
    userName: z.string().nullable(),
    los: z.string().nullable(),
    sbu: z.string().nullable(),
    suB_SBU: z.string().nullable(),
    competency: z.string().nullable(),
    partneR_ID: z.string().nullable(),
    manageR_ID: z.string().nullable(),
    type: z.string().nullable(),
    currency: z.string().nullable(),
    employeE_ID: z.string().nullable(),
  })
  .partial();
const CollectionBillingInputDTO = z
  .object({
    searchText: z.string().nullable(),
    reportType: z.string().nullable(),
    fullDataDump: z.boolean(),
    getTotalRecordsCount: z.boolean(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
  })
  .partial();
const DetailedCountOfSchedulerEmails = z
  .object({
    roleId: z.number().int(),
    canConfirm: z.boolean(),
    mailType: z.string().nullable(),
    restrictionType: z.string().nullable(),
    restrictionTypeText: z.string().nullable(),
    invoiceCountExcluded: z.number().int(),
    debtorsCountExcluded: z.number().int(),
    sumAmount: z.string().nullable(),
    aRteamConfirmationStatus: z.string().nullable(),
    collectionteamConfirmationStatus: z.string().nullable(),
  })
  .partial();
const UpdateConfirmRejectStatus = z
  .object({
    selectedMailType: z.string().nullable(),
    selectedDate: z.string().nullable(),
    status: z.string().nullable(),
    userName: z.string().nullable(),
    detailedCountOfSchedulerEmails: z
      .array(DetailedCountOfSchedulerEmails)
      .nullable(),
  })
  .partial();
const CollectionBillingDetailsForAttachmentInputDTO = z
  .object({
    mailType: z.string().nullable(),
    invoiceNo: z.string().nullable(),
    debtor_Name: z.string().nullable(),
    entityName: z.string().nullable(),
    partner_Name: z.string().nullable(),
    manager_name: z.string().nullable(),
  })
  .partial();
const SummaryTableInputDTO = z
  .object({
    mailType: z.string().nullable(),
    invoiceNo: z.string().nullable(),
    debtorName: z.string().nullable(),
    entityName: z.string().nullable(),
  })
  .partial();
const ORPSearch = z
  .object({
    userName: z.string().nullable(),
    clientCode: z.string().nullable(),
    leadType: z.string().nullable(),
  })
  .partial();
const DebtorSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    debtoR_CODE: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    tabType: z.string().nullable(),
    lisT_TYPE: z.string().nullable(),
    reportinG_MANAGER: z.string().nullable(),
    isPartner: z.boolean(),
    isManager: z.boolean(),
    isLOSLeader: z.boolean(),
    isSBULeader: z.boolean(),
    roleId: z.number().int(),
    employeeId: z.string().nullable(),
  })
  .partial();
const DebtorInvoiceSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    debtoR_NAME: z.string().nullable(),
    debtoR_CODE: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
    duE_AMOUNT: z.string().nullable(),
    duE_DATE: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    partneR_EMPLOYEEID: z.string().nullable(),
    los: z.string().nullable(),
    reportinG_MANAGER: z.string().nullable(),
    manageR_EMPLOYEEID: z.string().nullable(),
    cF_CONTACT_PERSON: z.string().nullable(),
    responsE_CATEGORY: z.string().nullable(),
    remarks: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    tabType: z.string().nullable(),
    isPartner: z.boolean(),
    isManager: z.boolean(),
    isLOSLeader: z.boolean(),
    isSBULeader: z.boolean(),
    employeeId: z.string().nullable(),
  })
  .partial();
const HangFireJobTypes = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(99),
]);
const HangFireJobRunStatus = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);
const UpdateHangFireStatusInputDTO = z
  .object({ jobtype: HangFireJobTypes, status: HangFireJobRunStatus })
  .partial();
const MiscOperations = z.object({}).partial();
const ImportInputDTO = z
  .object({
    logiN_USERID: z.string().nullable(),
    collectionFileType: z.string().nullable(),
    filePath: z.string().nullable(),
    arrayList: z.string().nullable(),
  })
  .partial();
const InvoiceSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
    duE_AMOUNT: z.string().nullable(),
    invoicE_DATE: z.string().nullable(),
    duE_DATE: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    los: z.string().nullable(),
    sbu: z.string().nullable(),
    responsE_CATEGORY: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    lasT_EMAIL_DATE: z.string().nullable(),
    remarks: z.string().nullable(),
    projecT_MANAGER: z.string().nullable(),
    promiseD_COLLECTION_DATE: z.string().nullable(),
    comment: z.string().nullable(),
    type: z.string().nullable(),
    tabType: z.string().nullable(),
    projecT_PARTNER: z.string().nullable(),
    searcH_WORD: z.string().nullable(),
    employeeId: z.string().nullable(),
    isPartiallyPaid: z.string().nullable(),
    debtoR_TERRITORY: z.string().nullable(),
    userType: z.string().nullable(),
    duE_NOTDUE: z.string().nullable(),
    partneR_COMMENT: z.string().nullable(),
    mailType: z.string().nullable(),
    enableDisableResponseReceivedFilter: z.string().nullable(),
    enableDisableResponseReceivedFilter_Partner: z.string().nullable(),
    clienT_FOLLOWUPS: z.string().nullable(),
    lisT_TYPE: z.string().nullable(),
    amount: z.string().nullable(),
    filteR_PARTNER: z.string().nullable(),
    month: z.string().nullable(),
  })
  .partial();
const OpenReceiptSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    searcH_WORD: z.string().nullable(),
    employeeId: z.string().nullable(),
    userType: z.string().nullable(),
    status: z.string().nullable(),
    clientName: z.string().nullable(),
    entityName: z.string().nullable(),
    receiptNum: z.string().nullable(),
    transactionType: z.string().nullable(),
    currencyCode: z.string().nullable(),
    receiptAmountFC: z.string().nullable(),
    receiptAmount: z.string().nullable(),
    balanceAmountFC: z.string().nullable(),
    balanceAmount: z.string().nullable(),
    receiptDate: z.string().nullable(),
    bankAccountName: z.string().nullable(),
    bankAccountNum: z.string().nullable(),
    ageing: z.string().nullable(),
    probablePartnerLOS: z.string().nullable(),
    reason: z.string().nullable(),
  })
  .partial();
const InvoiceCollectionDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    promiseD_COLLECTION_DATE: z.string().nullable(),
    comment: z.string().nullable(),
    userName: z.string().nullable(),
  })
  .partial();
const MailContentInputDTO = z
  .object({
    invoiceNo: z.string().nullable(),
    mailType: z.string().nullable(),
    entity_Name: z.string().nullable(),
    userType: z.string().nullable(),
    debtor_Name: z.string().nullable(),
    partnerName: z.string().nullable(),
    debtor_Territory: z.string().nullable(),
    managerName: z.string().nullable(),
  })
  .partial();
const MailFollowupSearchDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    contracT_NUMBER: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    userName: z.string().nullable(),
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
  })
  .partial();
const CallFollowupDTO = z
  .object({
    followuP_COUNT: z.number().int(),
    invoicE_NO: z.string().nullable(),
    contracT_NUMBER: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    phonE_NUMBER: z.string().nullable(),
    content: z.string().nullable(),
    iS_RECORDING: z.string().nullable(),
    attachmenT_NAME: z.string().nullable(),
    attachment: z.string().nullable(),
    senT_DATE: z.string().nullable(),
    senT_BY: z.string().nullable(),
    followuP_TYPE: z.string().nullable(),
    logType: z.string().nullable(),
    userName: z.string().nullable(),
  })
  .partial();
const ResponseCategoryDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    responsE_CATEGORY: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    remarks: z.string().nullable(),
    clienT_REMARKS: z.string().nullable(),
    userName: z.string().nullable(),
    type: z.string().nullable(),
    selectedApplyRemarksType: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    manageR_NAME: z.string().nullable(),
    entitY_NAME: z.string().nullable(),
  })
  .partial();
const AttachmentDTO = z
  .object({
    attachment: z.string().nullable(),
    attachmenT_NAME: z.string().nullable(),
  })
  .partial();
const GlobalSearch_InvoiceDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    searcH_WORD: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
    duE_AMOUNT: z.string().nullable(),
    invoicE_DATE: z.string().nullable(),
    duE_DATE: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    los: z.string().nullable(),
    sbu: z.string().nullable(),
    responsE_CATEGORY: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    lasT_EMAIL_DATE: z.string().nullable(),
    remarks: z.string().nullable(),
    projecT_MANAGER: z.string().nullable(),
    promiseD_COLLECTION_DATE: z.string().nullable(),
    comment: z.string().nullable(),
    projecT_PARTNER: z.string().nullable(),
    isPartiallyPaid: z.string().nullable(),
    debtoR_TERRITORY: z.string().nullable(),
    allocateD_TO_USERNAME: z.string().nullable(),
    duE_NOTDUE: z.string().nullable(),
    enableDisableResponseReceivedFilter: z.string().nullable(),
    enableDisableResponseReceivedFilter_Partner: z.string().nullable(),
    clienT_FOLLOWUPS: z.string().nullable(),
  })
  .partial();
const AllocateInvoiceDTO = z
  .object({
    userName: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
  })
  .partial();
const PartnerCommentDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    remarks: z.string().nullable(),
    promiseD_PAYMENT_DATE: z.string().nullable(),
    userName: z.string().nullable(),
  })
  .partial();
const ORPSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    debtoR_CODE: z.string().nullable(),
    receipT_NUMBER: z.string().nullable(),
  })
  .partial();
const ProvisionSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    employeeId: z.string().nullable(),
    userType: z.string().nullable(),
    tabType: z.string().nullable(),
    invoice_Number: z.string().nullable(),
    invoice_Date: z.string().nullable(),
    total_Provision: z.string().nullable(),
    provision_for_prev_month: z.string().nullable(),
    expected_additional_provision_in_current_month: z.string().nullable(),
    partner_Name: z.string().nullable(),
    manager_Name: z.string().nullable(),
    project_Code: z.string().nullable(),
  })
  .partial();
const TargetCollectionUpdatedInvoiceListDTO = z
  .object({
    outputType: z.string().nullable(),
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    roleId: z.string().nullable(),
    totalCount: z.number().int(),
    userName: z.string().nullable(),
    userRoleType: z.string().nullable(),
    invoice_Number: z.string().nullable(),
    invoice_Date: z.string().nullable(),
    target_Collection_Date: z.string().nullable(),
    target_Collection_Remarks: z.string().nullable(),
    targetCollectionDate_Updated_By: z.string().nullable(),
    targetCollectionDate_Updated_On: z.string().nullable(),
  })
  .partial();
const ResultDTO = z
  .object({ isSuccess: z.boolean(), message: z.string().nullable() })
  .partial();
const ClientEmailDTO = z
  .object({
    userName: z.string().nullable(),
    debtoR_CODE: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    clienT_EMAIL: z.string().nullable(),
  })
  .partial();
const UpdateTargetCollectionUpdatedInvoiceListDTO = z
  .object({
    userName: z.string().nullable(),
    selectedInvoices: z.array(z.string()).nullable(),
  })
  .partial();
const ManagerTargetCollectionDateDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    manageR_NAME: z.string().nullable(),
    remarks: z.string().nullable(),
    targeT_COLLECTION_DATE: z.string().nullable(),
    userName: z.string().nullable(),
  })
  .partial();
const InvoiceNoListDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    invoicE_NOs: z.array(z.string()).nullable(),
  })
  .partial();
const InvoiceSearch_WorkAreaDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
    isSearch: z.boolean(),
  })
  .partial();
const WorkArea_EmailTemplateSearchDTO = z
  .object({ invoicesList: z.array(z.string()).nullable() })
  .partial();
const WorkArea_ResponseCategorySearchDTO = z
  .object({ invoicesList: z.array(z.string()).nullable() })
  .partial();
const ResponseCategory_WorkAreaDTO = z
  .object({
    invoicE_NO: z.string().nullable(),
    responsE_CATEGORY: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    remarks: z.string().nullable(),
    clienT_REMARKS: z.string().nullable(),
    userName: z.string().nullable(),
  })
  .partial();
const ManagerPartnerNameSearchDTO = z
  .object({
    isManager: z.boolean(),
    isPartner: z.boolean(),
    isLOSLeader: z.boolean(),
    isSBULeader: z.boolean(),
    isSubSBULeader: z.boolean(),
    isCompetencyLeader: z.boolean(),
    employeeId: z.string().nullable(),
  })
  .partial();
const MemberTypes = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(4),
  z.literal(8),
  z.literal(16),
  z.literal(32),
  z.literal(64),
  z.literal(128),
  z.literal(191),
]);
const GenericParameterAttributes = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(8),
  z.literal(16),
  z.literal(28),
]);
const TypeAttributes = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(16),
  z.literal(24),
  z.literal(32),
  z.literal(128),
  z.literal(256),
  z.literal(1024),
  z.literal(2048),
  z.literal(4096),
  z.literal(8192),
  z.literal(16384),
  z.literal(65536),
  z.literal(131072),
  z.literal(196608),
  z.literal(262144),
  z.literal(264192),
  z.literal(1048576),
  z.literal(12582912),
]);
const LayoutKind = z.union([z.literal(0), z.literal(2), z.literal(3)]);
const StructLayoutAttribute = z
  .object({ typeId: z.unknown().nullable(), value: LayoutKind })
  .partial();
const IntPtr = z.object({}).partial();
const RuntimeTypeHandle = z.object({ value: IntPtr }).partial();
const EventAttributes = z.union([
  z.literal(0),
  z.literal(512),
  z.literal(1024),
]);
const MethodAttributes = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(16),
  z.literal(32),
  z.literal(64),
  z.literal(128),
  z.literal(256),
  z.literal(512),
  z.literal(1024),
  z.literal(2048),
  z.literal(4096),
  z.literal(8192),
  z.literal(16384),
  z.literal(32768),
  z.literal(53248),
]);
const MethodImplAttributes = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(8),
  z.literal(16),
  z.literal(32),
  z.literal(64),
  z.literal(128),
  z.literal(256),
  z.literal(512),
  z.literal(4096),
  z.literal(65535),
]);
const CallingConventions = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(32),
  z.literal(64),
]);
const RuntimeMethodHandle = z.object({ value: IntPtr }).partial();
const ParameterAttributes = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(4),
  z.literal(8),
  z.literal(16),
  z.literal(4096),
  z.literal(8192),
  z.literal(16384),
  z.literal(32768),
  z.literal(61440),
]);
const MemberInfo: z.ZodType<MemberInfo> = z.lazy(() =>
  z
    .object({
      memberType: MemberTypes,
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
    })
    .partial()
);
const ParameterInfo: z.ZodType<ParameterInfo> = z.lazy(() =>
  z
    .object({
      attributes: ParameterAttributes,
      member: MemberInfo,
      name: z.string().nullable(),
      parameterType: Type,
      position: z.number().int(),
      isIn: z.boolean(),
      isLcid: z.boolean(),
      isOptional: z.boolean(),
      isOut: z.boolean(),
      isRetval: z.boolean(),
      defaultValue: z.unknown().nullable(),
      rawDefaultValue: z.unknown().nullable(),
      hasDefaultValue: z.boolean(),
      customAttributes: z.array(CustomAttributeData).nullable(),
      metadataToken: z.number().int(),
    })
    .partial()
);
const ICustomAttributeProvider = z.object({}).partial();
const MethodInfo: z.ZodType<MethodInfo> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      attributes: MethodAttributes,
      methodImplementationFlags: MethodImplAttributes,
      callingConvention: CallingConventions,
      isAbstract: z.boolean(),
      isConstructor: z.boolean(),
      isFinal: z.boolean(),
      isHideBySig: z.boolean(),
      isSpecialName: z.boolean(),
      isStatic: z.boolean(),
      isVirtual: z.boolean(),
      isAssembly: z.boolean(),
      isFamily: z.boolean(),
      isFamilyAndAssembly: z.boolean(),
      isFamilyOrAssembly: z.boolean(),
      isPrivate: z.boolean(),
      isPublic: z.boolean(),
      isConstructedGenericMethod: z.boolean(),
      isGenericMethod: z.boolean(),
      isGenericMethodDefinition: z.boolean(),
      containsGenericParameters: z.boolean(),
      methodHandle: RuntimeMethodHandle,
      isSecurityCritical: z.boolean(),
      isSecuritySafeCritical: z.boolean(),
      isSecurityTransparent: z.boolean(),
      memberType: MemberTypes,
      returnParameter: ParameterInfo,
      returnType: Type,
      returnTypeCustomAttributes: ICustomAttributeProvider,
    })
    .partial()
);
const EventInfo: z.ZodType<EventInfo> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      memberType: MemberTypes,
      attributes: EventAttributes,
      isSpecialName: z.boolean(),
      addMethod: MethodInfo,
      removeMethod: MethodInfo,
      raiseMethod: MethodInfo,
      isMulticast: z.boolean(),
      eventHandlerType: Type,
    })
    .partial()
);
const FieldAttributes = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(16),
  z.literal(32),
  z.literal(64),
  z.literal(128),
  z.literal(256),
  z.literal(512),
  z.literal(1024),
  z.literal(4096),
  z.literal(8192),
  z.literal(32768),
  z.literal(38144),
]);
const RuntimeFieldHandle = z.object({ value: IntPtr }).partial();
const FieldInfo: z.ZodType<FieldInfo> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      memberType: MemberTypes,
      attributes: FieldAttributes,
      fieldType: Type,
      isInitOnly: z.boolean(),
      isLiteral: z.boolean(),
      isNotSerialized: z.boolean(),
      isPinvokeImpl: z.boolean(),
      isSpecialName: z.boolean(),
      isStatic: z.boolean(),
      isAssembly: z.boolean(),
      isFamily: z.boolean(),
      isFamilyAndAssembly: z.boolean(),
      isFamilyOrAssembly: z.boolean(),
      isPrivate: z.boolean(),
      isPublic: z.boolean(),
      isSecurityCritical: z.boolean(),
      isSecuritySafeCritical: z.boolean(),
      isSecurityTransparent: z.boolean(),
      fieldHandle: RuntimeFieldHandle,
    })
    .partial()
);
const PropertyAttributes = z.union([
  z.literal(0),
  z.literal(512),
  z.literal(1024),
  z.literal(4096),
  z.literal(8192),
  z.literal(16384),
  z.literal(32768),
  z.literal(62464),
]);
const PropertyInfo: z.ZodType<PropertyInfo> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      memberType: MemberTypes,
      propertyType: Type,
      attributes: PropertyAttributes,
      isSpecialName: z.boolean(),
      canRead: z.boolean(),
      canWrite: z.boolean(),
      getMethod: MethodInfo,
      setMethod: MethodInfo,
    })
    .partial()
);
const TypeInfo: z.ZodType<TypeInfo> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      isInterface: z.boolean(),
      memberType: MemberTypes,
      namespace: z.string().nullable(),
      assemblyQualifiedName: z.string().nullable(),
      fullName: z.string().nullable(),
      assembly: Assembly,
      module: Module,
      isNested: z.boolean(),
      declaringType: Type,
      declaringMethod: MethodBase,
      reflectedType: Type,
      underlyingSystemType: Type,
      isTypeDefinition: z.boolean(),
      isArray: z.boolean(),
      isByRef: z.boolean(),
      isPointer: z.boolean(),
      isConstructedGenericType: z.boolean(),
      isGenericParameter: z.boolean(),
      isGenericTypeParameter: z.boolean(),
      isGenericMethodParameter: z.boolean(),
      isGenericType: z.boolean(),
      isGenericTypeDefinition: z.boolean(),
      isSZArray: z.boolean(),
      isVariableBoundArray: z.boolean(),
      isByRefLike: z.boolean(),
      isFunctionPointer: z.boolean(),
      isUnmanagedFunctionPointer: z.boolean(),
      hasElementType: z.boolean(),
      genericTypeArguments: z.array(Type).nullable(),
      genericParameterPosition: z.number().int(),
      genericParameterAttributes: GenericParameterAttributes,
      attributes: TypeAttributes,
      isAbstract: z.boolean(),
      isImport: z.boolean(),
      isSealed: z.boolean(),
      isSpecialName: z.boolean(),
      isClass: z.boolean(),
      isNestedAssembly: z.boolean(),
      isNestedFamANDAssem: z.boolean(),
      isNestedFamily: z.boolean(),
      isNestedFamORAssem: z.boolean(),
      isNestedPrivate: z.boolean(),
      isNestedPublic: z.boolean(),
      isNotPublic: z.boolean(),
      isPublic: z.boolean(),
      isAutoLayout: z.boolean(),
      isExplicitLayout: z.boolean(),
      isLayoutSequential: z.boolean(),
      isAnsiClass: z.boolean(),
      isAutoClass: z.boolean(),
      isUnicodeClass: z.boolean(),
      isCOMObject: z.boolean(),
      isContextful: z.boolean(),
      isEnum: z.boolean(),
      isMarshalByRef: z.boolean(),
      isPrimitive: z.boolean(),
      isValueType: z.boolean(),
      isSignatureType: z.boolean(),
      isSecurityCritical: z.boolean(),
      isSecuritySafeCritical: z.boolean(),
      isSecurityTransparent: z.boolean(),
      structLayoutAttribute: StructLayoutAttribute,
      typeInitializer: ConstructorInfo,
      typeHandle: RuntimeTypeHandle,
      guid: z.string().uuid(),
      baseType: Type,
      isSerializable: z.boolean(),
      containsGenericParameters: z.boolean(),
      isVisible: z.boolean(),
      genericTypeParameters: z.array(Type).nullable(),
      declaredConstructors: z.array(ConstructorInfo).nullable(),
      declaredEvents: z.array(EventInfo).nullable(),
      declaredFields: z.array(FieldInfo).nullable(),
      declaredMembers: z.array(MemberInfo).nullable(),
      declaredMethods: z.array(MethodInfo).nullable(),
      declaredNestedTypes: z.array(TypeInfo).nullable(),
      declaredProperties: z.array(PropertyInfo).nullable(),
      implementedInterfaces: z.array(Type).nullable(),
    })
    .partial()
);
const SecurityRuleSet = z.union([z.literal(0), z.literal(1), z.literal(2)]);
const Assembly: z.ZodType<Assembly> = z.lazy(() =>
  z
    .object({
      definedTypes: z.array(TypeInfo).nullable(),
      exportedTypes: z.array(Type).nullable(),
      codeBase: z.string().nullable(),
      entryPoint: MethodInfo,
      fullName: z.string().nullable(),
      imageRuntimeVersion: z.string().nullable(),
      isDynamic: z.boolean(),
      location: z.string().nullable(),
      reflectionOnly: z.boolean(),
      isCollectible: z.boolean(),
      isFullyTrusted: z.boolean(),
      customAttributes: z.array(CustomAttributeData).nullable(),
      escapedCodeBase: z.string().nullable(),
      manifestModule: Module,
      modules: z.array(Module).nullable(),
      globalAssemblyCache: z.boolean(),
      hostContext: z.number().int(),
      securityRuleSet: SecurityRuleSet,
    })
    .partial()
);
const ModuleHandle = z.object({ mdStreamVersion: z.number().int() }).partial();
const Module: z.ZodType<Module> = z.lazy(() =>
  z
    .object({
      assembly: Assembly,
      fullyQualifiedName: z.string().nullable(),
      name: z.string().nullable(),
      mdStreamVersion: z.number().int(),
      moduleVersionId: z.string().uuid(),
      scopeName: z.string().nullable(),
      moduleHandle: ModuleHandle,
      customAttributes: z.array(CustomAttributeData).nullable(),
      metadataToken: z.number().int(),
    })
    .partial()
);
const ConstructorInfo: z.ZodType<ConstructorInfo> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      attributes: MethodAttributes,
      methodImplementationFlags: MethodImplAttributes,
      callingConvention: CallingConventions,
      isAbstract: z.boolean(),
      isConstructor: z.boolean(),
      isFinal: z.boolean(),
      isHideBySig: z.boolean(),
      isSpecialName: z.boolean(),
      isStatic: z.boolean(),
      isVirtual: z.boolean(),
      isAssembly: z.boolean(),
      isFamily: z.boolean(),
      isFamilyAndAssembly: z.boolean(),
      isFamilyOrAssembly: z.boolean(),
      isPrivate: z.boolean(),
      isPublic: z.boolean(),
      isConstructedGenericMethod: z.boolean(),
      isGenericMethod: z.boolean(),
      isGenericMethodDefinition: z.boolean(),
      containsGenericParameters: z.boolean(),
      methodHandle: RuntimeMethodHandle,
      isSecurityCritical: z.boolean(),
      isSecuritySafeCritical: z.boolean(),
      isSecurityTransparent: z.boolean(),
      memberType: MemberTypes,
    })
    .partial()
);
const CustomAttributeTypedArgument: z.ZodType<CustomAttributeTypedArgument> =
  z.lazy(() =>
    z.object({ argumentType: Type, value: z.unknown().nullable() }).partial()
  );
const CustomAttributeNamedArgument: z.ZodType<CustomAttributeNamedArgument> =
  z.lazy(() =>
    z
      .object({
        memberInfo: MemberInfo,
        typedValue: CustomAttributeTypedArgument,
        memberName: z.string().nullable(),
        isField: z.boolean(),
      })
      .partial()
  );
const CustomAttributeData: z.ZodType<CustomAttributeData> = z.lazy(() =>
  z
    .object({
      attributeType: Type,
      constructor: ConstructorInfo,
      constructorArguments: z.array(CustomAttributeTypedArgument).nullable(),
      namedArguments: z.array(CustomAttributeNamedArgument).nullable(),
    })
    .partial()
);
const Type: z.ZodType<Type> = z.lazy(() =>
  z
    .object({
      name: z.string().nullable(),
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      isInterface: z.boolean(),
      memberType: MemberTypes,
      namespace: z.string().nullable(),
      assemblyQualifiedName: z.string().nullable(),
      fullName: z.string().nullable(),
      assembly: Assembly,
      module: Module,
      isNested: z.boolean(),
      declaringType: Type,
      declaringMethod: MethodBase,
      reflectedType: Type,
      underlyingSystemType: Type,
      isTypeDefinition: z.boolean(),
      isArray: z.boolean(),
      isByRef: z.boolean(),
      isPointer: z.boolean(),
      isConstructedGenericType: z.boolean(),
      isGenericParameter: z.boolean(),
      isGenericTypeParameter: z.boolean(),
      isGenericMethodParameter: z.boolean(),
      isGenericType: z.boolean(),
      isGenericTypeDefinition: z.boolean(),
      isSZArray: z.boolean(),
      isVariableBoundArray: z.boolean(),
      isByRefLike: z.boolean(),
      isFunctionPointer: z.boolean(),
      isUnmanagedFunctionPointer: z.boolean(),
      hasElementType: z.boolean(),
      genericTypeArguments: z.array(Type).nullable(),
      genericParameterPosition: z.number().int(),
      genericParameterAttributes: GenericParameterAttributes,
      attributes: TypeAttributes,
      isAbstract: z.boolean(),
      isImport: z.boolean(),
      isSealed: z.boolean(),
      isSpecialName: z.boolean(),
      isClass: z.boolean(),
      isNestedAssembly: z.boolean(),
      isNestedFamANDAssem: z.boolean(),
      isNestedFamily: z.boolean(),
      isNestedFamORAssem: z.boolean(),
      isNestedPrivate: z.boolean(),
      isNestedPublic: z.boolean(),
      isNotPublic: z.boolean(),
      isPublic: z.boolean(),
      isAutoLayout: z.boolean(),
      isExplicitLayout: z.boolean(),
      isLayoutSequential: z.boolean(),
      isAnsiClass: z.boolean(),
      isAutoClass: z.boolean(),
      isUnicodeClass: z.boolean(),
      isCOMObject: z.boolean(),
      isContextful: z.boolean(),
      isEnum: z.boolean(),
      isMarshalByRef: z.boolean(),
      isPrimitive: z.boolean(),
      isValueType: z.boolean(),
      isSignatureType: z.boolean(),
      isSecurityCritical: z.boolean(),
      isSecuritySafeCritical: z.boolean(),
      isSecurityTransparent: z.boolean(),
      structLayoutAttribute: StructLayoutAttribute,
      typeInitializer: ConstructorInfo,
      typeHandle: RuntimeTypeHandle,
      guid: z.string().uuid(),
      baseType: Type,
      isSerializable: z.boolean(),
      containsGenericParameters: z.boolean(),
      isVisible: z.boolean(),
    })
    .partial()
);
const MethodBase: z.ZodType<MethodBase> = z.lazy(() =>
  z
    .object({
      memberType: MemberTypes,
      name: z.string().nullable(),
      declaringType: Type,
      reflectedType: Type,
      module: Module,
      customAttributes: z.array(CustomAttributeData).nullable(),
      isCollectible: z.boolean(),
      metadataToken: z.number().int(),
      attributes: MethodAttributes,
      methodImplementationFlags: MethodImplAttributes,
      callingConvention: CallingConventions,
      isAbstract: z.boolean(),
      isConstructor: z.boolean(),
      isFinal: z.boolean(),
      isHideBySig: z.boolean(),
      isSpecialName: z.boolean(),
      isStatic: z.boolean(),
      isVirtual: z.boolean(),
      isAssembly: z.boolean(),
      isFamily: z.boolean(),
      isFamilyAndAssembly: z.boolean(),
      isFamilyOrAssembly: z.boolean(),
      isPrivate: z.boolean(),
      isPublic: z.boolean(),
      isConstructedGenericMethod: z.boolean(),
      isGenericMethod: z.boolean(),
      isGenericMethodDefinition: z.boolean(),
      containsGenericParameters: z.boolean(),
      methodHandle: RuntimeMethodHandle,
      isSecurityCritical: z.boolean(),
      isSecuritySafeCritical: z.boolean(),
      isSecurityTransparent: z.boolean(),
    })
    .partial()
);
const Exception: z.ZodType<Exception> = z.lazy(() =>
  z
    .object({
      targetSite: MethodBase,
      message: z.string().nullable(),
      data: z.object({}).partial().passthrough().nullable(),
      innerException: Exception,
      helpLink: z.string().nullable(),
      source: z.string().nullable(),
      hResult: z.number().int(),
      stackTrace: z.string().nullable(),
    })
    .partial()
);
const LoggerExceptionDTO = z
  .object({ message: z.string().nullable(), ex: Exception })
  .partial();
const LoggerTraceDTO = z.object({ message: z.string().nullable() }).partial();
const BlackOutPeriodDTO = z
  .object({
    userId: z.string().nullable(),
    selectedStartDate: z.string().nullable(),
    selectedEndDate: z.string().nullable(),
  })
  .partial();
const ScheduleAutoClientEmailInputDTO = z
  .object({
    id: z.string().nullable(),
    status: z.string().nullable(),
    selectedMailType: z.string().nullable(),
    selectedFrequency: z.string().nullable(),
    selectedDate: z.string().nullable(),
    userId: z.string().nullable(),
    scheduledMailType: z.string().nullable(),
    scheduleId: z.string().nullable(),
  })
  .partial();
const ManagerSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    reportinG_MANAGER: z.string().nullable(),
    manageR_EMPLOYEEID: z.string().nullable(),
    isPartner: z.boolean(),
    isManager: z.boolean(),
    isLOSLeader: z.boolean(),
    isSBULeader: z.boolean(),
    roleId: z.number().int(),
    employeeId: z.string().nullable(),
    tabType: z.string().nullable(),
    lisT_TYPE: z.string().nullable(),
  })
  .partial();
const ScheduleBlackOutPeriod_AuditLogSearchDTO = z
  .object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    startDate: z.string().nullable(),
    endDate: z.string().nullable(),
    createdBy: z.string().nullable(),
    createdOn: z.string().nullable(),
    pageNumber: z.number().int(),
    pageSize: z.number().int(),
    sortOrder: z.string().nullable(),
    sortBy: z.string().nullable(),
  })
  .partial();
const ScheduleAutoClientEmail_AuditLogSearchDTO = z
  .object({
    id: z.string().nullable(),
    status: z.string().nullable(),
    mailType: z.string().nullable(),
    mailFrequency: z.string().nullable(),
    scheduled_By_Name: z.string().nullable(),
    userName: z.string().nullable(),
    sortOrder: z.string().nullable(),
    sortBy: z.string().nullable(),
    pageNumber: z.number().int(),
    pageSize: z.number().int(),
  })
  .partial();
const UserRolesDTO = z
  .object({
    userRoleId: z.string().nullable(),
    userRole_AdditionalId: z.string().nullable(),
    userId: z.string().nullable(),
    employeeId: z.string().nullable(),
    employeeName: z.string().nullable(),
    email: z.string().nullable(),
    roleId: z.string().nullable(),
    roleName: z.string().nullable(),
    los: z.string().nullable(),
    tblStaff_LOS: z.string().nullable(),
    sbu: z.string().nullable(),
    createdOn: z.string().nullable(),
    updatedOn: z.string().nullable(),
    terminatedOn: z.string().nullable(),
    remarks: z.string().nullable(),
    isExport: z.boolean(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    totalCount: z.number().int(),
    sortOrder: z.string().nullable(),
    sortBy: z.string().nullable(),
  })
  .partial();
const FinalAllocationsDTO = z
  .object({
    partnerName: z.string().nullable(),
    partnerEmployeeId: z.string().nullable(),
    allocatedToName: z.string().nullable(),
    userId: z.string().nullable(),
    allocatedToEmpGuid: z.string().nullable(),
    allocatedToEmployeeId: z.string().nullable(),
    allocatedToEmail: z.string().nullable(),
    isExport: z.boolean(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    totalCount: z.number().int(),
    sortOrder: z.string().nullable(),
    sortBy: z.string().nullable(),
  })
  .partial();
const UserRoleCRUD_DTO = z
  .object({
    userRoleId: z.string().nullable(),
    userRole_AdditionalId: z.string().nullable(),
    actionType: z.string().nullable(),
    selectedEmail: z.string().nullable(),
    selectedRole: z.string().nullable(),
    userId: z.string().nullable(),
    useR_EMAIL: z.string().nullable(),
    roleName: z.string().nullable(),
    selectedLOS: z.string().nullable(),
    remarks: z.string().nullable(),
  })
  .partial();
const ManagerInvoiceSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    employeeId: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    reportinG_MANAGER: z.string().nullable(),
    partneR_EMPLOYEEID: z.string().nullable(),
    manageR_EMPLOYEEID: z.string().nullable(),
    debtoR_CODE: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
    duE_AMOUNT: z.string().nullable(),
    duE_DATE: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    cF_CONTACT_PERSON: z.string().nullable(),
    mobilE_NUMBER: z.string().nullable(),
    los: z.string().nullable(),
    invoicE_STATUS: z.string().nullable(),
    tabType: z.string().nullable(),
    isPartner: z.boolean(),
    isLOSLeader: z.boolean(),
    isSBULeader: z.boolean(),
    roleId_Additional: z.number().int(),
    lisT_TYPE: z.string().nullable(),
  })
  .partial();
const ManagerSummarySearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    reportinG_MANAGER: z.string().nullable(),
    isPartner: z.boolean(),
    isManager: z.boolean(),
    isLOSLeader: z.boolean(),
    isSBULeader: z.boolean(),
    employeeId: z.string().nullable(),
    tabType: z.string().nullable(),
    lisT_TYPE: z.string().nullable(),
  })
  .partial();
const PartnerAllocationDTO = z
  .object({
    partneR_NAME: z.string().nullable(),
    allocateD_TO_EMAIL: z.string().nullable(),
    allocateD_TO_NAME: z.string().nullable(),
    allocateD_TO_EMPLOYEEID: z.string().nullable(),
    userName: z.string().nullable(),
  })
  .partial();
const SendEmailInputDTO = z
  .object({
    maiL_BODY: z.string().nullable(),
    maiL_BODY_ACTUAL: z.string().nullable(),
    maiL_TYPE: z.string().nullable(),
    userType: z.string().nullable(),
    userName: z.string().nullable(),
    invoices: z.string().nullable(),
    froM_EMAIL: z.string().nullable(),
    mailGuid: z.string().nullable(),
    tO_EMAIL: z.string().nullable(),
    cC_EMAIL: z.string().nullable(),
    senT_TO: z.string().nullable(),
    maiL_SUBJECT: z.string().nullable(),
    debtorName: z.string().nullable(),
    partnerName: z.string().nullable(),
    managerName: z.string().nullable(),
    debtor_Territory: z.string().nullable(),
    attachments: z.array(AttachmentDTO).nullable(),
  })
  .partial();
const SendEmailMiscInputDTO = z
  .object({
    maiL_BODY: z.string().nullable(),
    maiL_BODY_ACTUAL: z.string().nullable(),
    maiL_TYPE: z.string().nullable(),
    userType: z.string().nullable(),
    userName: z.string().nullable(),
    froM_EMAIL: z.string().nullable(),
    mailGuid: z.string().nullable(),
    replY_TO: z.string().nullable(),
    tO_EMAIL: z.string().nullable(),
    cC_EMAIL: z.string().nullable(),
    senT_TO: z.string().nullable(),
    maiL_SUBJECT: z.string().nullable(),
    attachments: z.array(AttachmentDTO).nullable(),
  })
  .partial();
const ResponseMailContentDTO = z
  .object({
    appName: z.string().nullable(),
    source: z.string().nullable(),
    approvalStatus: z.string().nullable(),
    senderEmail: z.string().nullable(),
    mailSubject: z.string().nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
  })
  .partial();
const PartnerSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    partneR_NAME: z.string().nullable(),
    partneR_EMPLOYEEID: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    reportinG_MANAGER: z.string().nullable(),
    tabType: z.string().nullable(),
    isPartner: z.boolean(),
    isManager: z.boolean(),
    isSBULeader: z.boolean(),
    roleId: z.number().int(),
    employeeId: z.string().nullable(),
    roleId_Additional: z.number().int(),
    lisT_TYPE: z.string().nullable(),
  })
  .partial();
const PartnerInvoiceSearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    partneR_EMPLOYEEID: z.string().nullable(),
    manageR_EMPLOYEEID: z.string().nullable(),
    manageR_NAME: z.string().nullable(),
    invoicE_NO: z.string().nullable(),
    duE_AMOUNT: z.string().nullable(),
    duE_DATE: z.string().nullable(),
    debtoR_NAME: z.string().nullable(),
    debtoR_CODE: z.string().nullable(),
    nexT_FOLLOWUP_DATE: z.string().nullable(),
    cF_CONTACT_PERSON: z.string().nullable(),
    mobilE_NUMBER: z.string().nullable(),
    los: z.string().nullable(),
    invoicE_STATUS: z.string().nullable(),
    tabType: z.string().nullable(),
    isFromMenu: z.string().nullable(),
    isSBULeader: z.boolean(),
    duE_NOTDUE: z.string().nullable(),
    lisT_TYPE: z.string().nullable(),
  })
  .partial();
const PartnerSummarySearchDTO = z
  .object({
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    userName: z.string().nullable(),
    reportinG_PARTNER: z.string().nullable(),
    isPartner: z.boolean(),
    isManager: z.boolean(),
    isSBULeader: z.boolean(),
    employeeId: z.string().nullable(),
    tabType: z.string().nullable(),
    roleId_Additional: z.number().int(),
    lisT_TYPE: z.string().nullable(),
  })
  .partial();
const DispatchReportSearchDTO = z
  .object({
    empGuid: z.string().nullable(),
    emailSentDate: z.string().nullable(),
    month: z.string().nullable(),
    mailType: z.string().nullable(),
    status: z.string().nullable(),
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
  })
  .partial();
const SOAReportSearchDTO = z
  .object({
    debtorName: z.string().nullable(),
    entityName: z.string().nullable(),
    userName: z.string().nullable(),
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
  })
  .partial();
const FileUploadReportSearchDTO = z
  .object({
    importedType: z.string().nullable(),
    loginUser: z.string().nullable(),
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
  })
  .partial();
const EmailsListSearchDTO = z
  .object({
    empGuid: z.string().nullable(),
    emailSentDate: z.string().nullable(),
    month: z.string().nullable(),
    mailType: z.string().nullable(),
    status: z.string().nullable(),
    sortBy: z.string().nullable(),
    sortOrder: z.string().nullable(),
    pageSize: z.number().int(),
    pageNumber: z.number().int(),
    isSuccess: z.boolean(),
    mailSentStatus: z.string().nullable(),
  })
  .partial();
const UserDTO = z
  .object({
    employeeId: z.string().nullable(),
    empGuid: z.string().nullable(),
    employeeName: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    pwcgmailid: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    userName: z.string().nullable(),
    roleId: z.number().int(),
    roleName: z.string().nullable(),
    management_Level_Reference: z.string().nullable(),
    los: z.string().nullable(),
    office: z.string().nullable(),
    job_Description: z.string().nullable(),
    sbu: z.string().nullable(),
    subSBU: z.string().nullable(),
    isManager: z.boolean(),
    isPartner: z.boolean(),
    dataUploadedOn: z.string().nullable(),
    isAdditionalRole: z.boolean(),
    roleId_Additional: z.number().int(),
    roleName_Additional: z.string().nullable(),
  })
  .partial();
const UserSessionDTO = z
  .object({ logiN_USERID: z.string().nullable(), isLogin: z.boolean() })
  .partial();

export const schemas = {
  AppInsightsSearchParametersDTO,
  APIResultDTO,
  AppInsights_UserDetailsDTO,
  DashboardInputDTO,
  CollectionBillingInputDTO,
  DetailedCountOfSchedulerEmails,
  UpdateConfirmRejectStatus,
  CollectionBillingDetailsForAttachmentInputDTO,
  SummaryTableInputDTO,
  ORPSearch,
  DebtorSearchDTO,
  DebtorInvoiceSearchDTO,
  HangFireJobTypes,
  HangFireJobRunStatus,
  UpdateHangFireStatusInputDTO,
  MiscOperations,
  ImportInputDTO,
  InvoiceSearchDTO,
  OpenReceiptSearchDTO,
  InvoiceCollectionDTO,
  MailContentInputDTO,
  MailFollowupSearchDTO,
  CallFollowupDTO,
  ResponseCategoryDTO,
  AttachmentDTO,
  GlobalSearch_InvoiceDTO,
  AllocateInvoiceDTO,
  PartnerCommentDTO,
  ORPSearchDTO,
  ProvisionSearchDTO,
  TargetCollectionUpdatedInvoiceListDTO,
  ResultDTO,
  ClientEmailDTO,
  UpdateTargetCollectionUpdatedInvoiceListDTO,
  ManagerTargetCollectionDateDTO,
  InvoiceNoListDTO,
  InvoiceSearch_WorkAreaDTO,
  WorkArea_EmailTemplateSearchDTO,
  WorkArea_ResponseCategorySearchDTO,
  ResponseCategory_WorkAreaDTO,
  ManagerPartnerNameSearchDTO,
  MemberTypes,
  GenericParameterAttributes,
  TypeAttributes,
  LayoutKind,
  StructLayoutAttribute,
  IntPtr,
  RuntimeTypeHandle,
  EventAttributes,
  MethodAttributes,
  MethodImplAttributes,
  CallingConventions,
  RuntimeMethodHandle,
  ParameterAttributes,
  MemberInfo,
  ParameterInfo,
  ICustomAttributeProvider,
  MethodInfo,
  EventInfo,
  FieldAttributes,
  RuntimeFieldHandle,
  FieldInfo,
  PropertyAttributes,
  PropertyInfo,
  TypeInfo,
  SecurityRuleSet,
  Assembly,
  ModuleHandle,
  Module,
  ConstructorInfo,
  CustomAttributeTypedArgument,
  CustomAttributeNamedArgument,
  CustomAttributeData,
  Type,
  MethodBase,
  Exception,
  LoggerExceptionDTO,
  LoggerTraceDTO,
  BlackOutPeriodDTO,
  ScheduleAutoClientEmailInputDTO,
  ManagerSearchDTO,
  ScheduleBlackOutPeriod_AuditLogSearchDTO,
  ScheduleAutoClientEmail_AuditLogSearchDTO,
  UserRolesDTO,
  FinalAllocationsDTO,
  UserRoleCRUD_DTO,
  ManagerInvoiceSearchDTO,
  ManagerSummarySearchDTO,
  PartnerAllocationDTO,
  SendEmailInputDTO,
  SendEmailMiscInputDTO,
  ResponseMailContentDTO,
  PartnerSearchDTO,
  PartnerInvoiceSearchDTO,
  PartnerSummarySearchDTO,
  DispatchReportSearchDTO,
  SOAReportSearchDTO,
  FileUploadReportSearchDTO,
  EmailsListSearchDTO,
  UserDTO,
  UserSessionDTO,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/AppInsights/appinsights_los_list/:employeeId/:isAllLOS',
    alias: 'getAppInsightsappinsights_los_listEmployeeIdIsAllLOS',
    requestFormat: 'json',
    parameters: [
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isAllLOS',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/AppInsights/appinsights_sbu_list/:los',
    alias: 'getAppInsightsappinsights_sbu_listLos',
    requestFormat: 'json',
    parameters: [
      {
        name: 'los',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/AppInsights/appinsights-pageviews',
    alias: 'postAppInsightsappinsightsPageviews',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: AppInsightsSearchParametersDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/AppInsights/appinsights-user-details',
    alias: 'postAppInsightsappinsightsUserDetails',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.array(AppInsights_UserDetailsDTO),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/card_details',
    alias: 'postDashboardcard_details',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: DashboardInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/collectionbilling',
    alias: 'postDashboardcollectionbilling',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CollectionBillingInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/collectionenginereport',
    alias: 'postDashboardcollectionenginereport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CollectionBillingInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/confirm-reject-update-status',
    alias: 'postDashboardconfirmRejectUpdateStatus',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateConfirmRejectStatus,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Dashboard/detailed-count-of-scheduler-emails',
    alias: 'getDashboarddetailedCountOfSchedulerEmails',
    requestFormat: 'json',
    parameters: [
      {
        name: 'date',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'mailtype',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/fulldatadump',
    alias: 'postDashboardfulldatadump',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CollectionBillingInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/Get_ORP_Lead',
    alias: 'postDashboardGet_ORP_Lead',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ORPSearch,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Dashboard/get-dashboard-misc-data',
    alias: 'getDashboardgetDashboardMiscData',
    requestFormat: 'json',
    parameters: [
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/getlistofinvoicesforattachment',
    alias: 'postDashboardgetlistofinvoicesforattachment',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CollectionBillingDetailsForAttachmentInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/getlistofinvoicesforattachment_v2',
    alias: 'postDashboardgetlistofinvoicesforattachment_v2',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CollectionBillingDetailsForAttachmentInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Dashboard/getorpdashboardheaderdata/:mailType/:debtorname/:entityName',
    alias: 'getDashboardgetorpdashboardheaderdataMailTypeDebtornameEntityName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'mailType',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'debtorname',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'entityName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/getsummarycontentdata',
    alias: 'postDashboardgetsummarycontentdata',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: SummaryTableInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Dashboard/lospersonna_details',
    alias: 'postDashboardlospersonna_details',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: DashboardInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Dashboard/review-scheduler-emails-table',
    alias: 'getDashboardreviewSchedulerEmailsTable',
    requestFormat: 'json',
    parameters: [
      {
        name: 'month',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'year',
        type: 'Query',
        schema: z.number().int().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Dashboard/tblcollectionbilling_totalcount',
    alias: 'getDashboardtblcollectionbilling_totalcount',
    requestFormat: 'json',
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Deptor/invoicelist',
    alias: 'postDeptorinvoicelist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: DebtorInvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Deptor/list',
    alias: 'postDeptorlist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: DebtorSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Download/download-file/:filetype',
    alias: 'getDownloaddownloadFileFiletype',
    requestFormat: 'json',
    parameters: [
      {
        name: 'filetype',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Download/download-template/:fileName',
    alias: 'getDownloaddownloadTemplateFileName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'fileName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Hangfire/generate_trend_analysis_data',
    alias: 'getHangfiregenerate_trend_analysis_data',
    requestFormat: 'json',
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Hangfire/hangfire_job_run_status',
    alias: 'getHangfirehangfire_job_run_status',
    requestFormat: 'json',
    parameters: [
      {
        name: 'jobtype',
        type: 'Query',
        schema: z
          .union([
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(99),
          ])
          .optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Hangfire/misc_operations',
    alias: 'postHangfiremisc_operations',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({}).partial(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Hangfire/update_hangfire_job_run_status',
    alias: 'postHangfireupdate_hangfire_job_run_status',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateHangFireStatusInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Import/billing_analysis',
    alias: 'postImportbilling_analysis',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ImportInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Import/collection',
    alias: 'postImportcollection',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ImportInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Import/debtors_ageing',
    alias: 'postImportdebtors_ageing',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ImportInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Import/dwos',
    alias: 'postImportdwos',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ImportInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Import/provision',
    alias: 'postImportprovision',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ImportInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Import/save_tracker_file',
    alias: 'postImportsave_tracker_file',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ImportInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/addToWorkArea',
    alias: 'postInvoiceaddToWorkArea',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceNoListDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/allocate',
    alias: 'postInvoiceallocate',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: AllocateInvoiceDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/auditlist/:invoiceNo',
    alias: 'getInvoiceauditlistInvoiceNo',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/clientdetails/:invoiceNumber',
    alias: 'getInvoiceclientdetailsInvoiceNumber',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNumber',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/clientemail_list/:debtorCode',
    alias: 'getInvoiceclientemail_listDebtorCode',
    requestFormat: 'json',
    parameters: [
      {
        name: 'debtorCode',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/coll_manager_invoicelist',
    alias: 'postInvoicecoll_manager_invoicelist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/coll_user_invoicedetails/:invoiceNo/:userName',
    alias: 'getInvoicecoll_user_invoicedetailsInvoiceNoUserName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/coll_user_invoicelist',
    alias: 'postInvoicecoll_user_invoicelist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/competency_list/:los/:sbu/:subsbu/:employeeId/:isSBULeader/:isSubSBULeader/:isCompetencyLeader',
    alias:
      'getInvoicecompetency_listLosSbuSubsbuEmployeeIdIsSBULeaderIsSubSBULeaderIsCompetencyLeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'los',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'subsbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isSubSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isCompetencyLeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/confirm_engagementresponse_acknowledgement',
    alias: 'getInvoiceconfirm_engagementresponse_acknowledgement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'userName',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: ResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/details/:invoiceNo/:userName',
    alias: 'getInvoicedetailsInvoiceNoUserName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/emailsending_details',
    alias: 'postInvoiceemailsending_details',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: MailContentInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/entity_list/:debtorName/:invoiceNo/:mailType',
    alias: 'getInvoiceentity_listDebtorNameInvoiceNoMailType',
    requestFormat: 'json',
    parameters: [
      {
        name: 'debtorName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'mailType',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/export_common',
    alias: 'postInvoiceexport_common',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/followupmaillist',
    alias: 'postInvoicefollowupmaillist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: MailFollowupSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/followupmails/:invoiceNo/:userType',
    alias: 'getInvoicefollowupmailsInvoiceNoUserType',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userType',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/get_email_attachments/:attachedIds',
    alias: 'getInvoiceget_email_attachmentsAttachedIds',
    requestFormat: 'json',
    parameters: [
      {
        name: 'attachedIds',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/get_emailtemplates_workarea',
    alias: 'postInvoiceget_emailtemplates_workarea',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: WorkArea_EmailTemplateSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/get_invoice_email_attachments/:invoiceNo/:mailId',
    alias: 'getInvoiceget_invoice_email_attachmentsInvoiceNoMailId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'mailId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/get_response_category_list_workarea',
    alias: 'postInvoiceget_response_category_list_workarea',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: WorkArea_ResponseCategorySearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/list',
    alias: 'postInvoicelist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/list_common',
    alias: 'postInvoicelist_common',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/list_common_export',
    alias: 'postInvoicelist_common_export',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/list_globalsearch',
    alias: 'postInvoicelist_globalsearch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: GlobalSearch_InvoiceDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/list_sendemail/:invoiceNo',
    alias: 'getInvoicelist_sendemailInvoiceNo',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceno',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/list_workarea',
    alias: 'postInvoicelist_workarea',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearch_WorkAreaDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/list_workingcapital_trend_analysis',
    alias: 'postInvoicelist_workingcapital_trend_analysis',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/los_list/:employeeId/:isAllLOS/:isSBULeader',
    alias: 'getInvoicelos_listEmployeeIdIsAllLOSIsSBULeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isAllLOS',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/mailattachments/:invoiceNo/:mailId',
    alias: 'getInvoicemailattachmentsInvoiceNoMailId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'mailId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/mailtemplate_content/:mailType/:userType',
    alias: 'getInvoicemailtemplate_contentMailTypeUserType',
    requestFormat: 'json',
    parameters: [
      {
        name: 'mailType',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userType',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/mailtemplates/:userType/:invoiceType',
    alias: 'getInvoicemailtemplatesUserTypeInvoiceType',
    requestFormat: 'json',
    parameters: [
      {
        name: 'userType',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'invoiceType',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/manager_name_list',
    alias: 'postInvoicemanager_name_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ManagerPartnerNameSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/manager/list',
    alias: 'postInvoicemanagerlist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/managers_list/:los/:sbu/:subsbu/:competency/:parterId/:employeeId/:isSBULeader/:isSubSBULeader/:isCompetencyLeader',
    alias:
      'getInvoicemanagers_listLosSbuSubsbuCompetencyParterIdEmployeeIdIsSBULeaderIsSubSBULeaderIsCompetencyLeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'los',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'subsbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'competency',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'parterId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isSubSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isCompetencyLeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/open-receipts',
    alias: 'postInvoiceopenReceipts',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: OpenReceiptSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/orp_receiptlist',
    alias: 'postInvoiceorp_receiptlist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ORPSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/partner_name_list',
    alias: 'postInvoicepartner_name_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ManagerPartnerNameSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/partnerdetails/:contractNumber',
    alias: 'getInvoicepartnerdetailsContractNumber',
    requestFormat: 'json',
    parameters: [
      {
        name: 'contractNumber',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/partners_list/:los/:sbu/:subsbu/:competency/:employeeId/:isSBULeader/:isSubSBULeader/:isCompetencyLeader',
    alias:
      'getInvoicepartners_listLosSbuSubsbuCompetencyEmployeeIdIsSBULeaderIsSubSBULeaderIsCompetencyLeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'los',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'subsbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'competency',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isSubSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isCompetencyLeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/partners/list',
    alias: 'postInvoicepartnerslist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/provision_list',
    alias: 'postInvoiceprovision_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ProvisionSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/receiptnumbers/:debtorCode',
    alias: 'getInvoicereceiptnumbersDebtorCode',
    requestFormat: 'json',
    parameters: [
      {
        name: 'debtorCode',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/remove_clientEmail',
    alias: 'postInvoiceremove_clientEmail',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ClientEmailDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/removeFromWorkArea',
    alias: 'postInvoiceremoveFromWorkArea',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceNoListDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/response_category_list/:isITC',
    alias: 'getInvoiceresponse_category_listIsITC',
    requestFormat: 'json',
    parameters: [
      {
        name: 'isITC',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/responsecategory_historylist/:invoiceNo/:pageSize/:pageNumber',
    alias: 'getInvoiceresponsecategory_historylistInvoiceNoPageSizePageNumber',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'pageSize',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'pageNumber',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/responsemails/:invoiceNo/:userType',
    alias: 'getInvoiceresponsemailsInvoiceNoUserType',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userType',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/save_email_attachments',
    alias: 'postInvoicesave_email_attachments',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: AttachmentDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/save_partnercomment',
    alias: 'postInvoicesave_partnercomment',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: PartnerCommentDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/save_targetcoldate',
    alias: 'postInvoicesave_targetcoldate',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ManagerTargetCollectionDateDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/SaveCallFollowup',
    alias: 'postInvoiceSaveCallFollowup',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CallFollowupDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/sbu_list/:los/:employeeId/:isSBULeader/:isSubSBULeader/:isCompetencyLeader',
    alias:
      'getInvoicesbu_listLosEmployeeIdIsSBULeaderIsSubSBULeaderIsCompetencyLeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'los',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isSubSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isCompetencyLeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/subsbu_list/:los/:sbu/:employeeId/:isSBULeader/:isSubSBULeader/:isCompetencyLeader',
    alias:
      'getInvoicesubsbu_listLosSbuEmployeeIdIsSBULeaderIsSubSBULeaderIsCompetencyLeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'los',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sbu',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isSubSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isCompetencyLeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/targetcollectiondate_updatedinvoices_list',
    alias: 'postInvoicetargetcollectiondate_updatedinvoices_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: TargetCollectionUpdatedInvoiceListDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/targetdate_historylist/:invoiceNo/:pageSize/:pageNumber',
    alias: 'getInvoicetargetdate_historylistInvoiceNoPageSizePageNumber',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'pageSize',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'pageNumber',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/update_clientEmail',
    alias: 'postInvoiceupdate_clientEmail',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ClientEmailDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/update_collectiondate',
    alias: 'postInvoiceupdate_collectiondate',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: InvoiceCollectionDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/update_reponsecategory',
    alias: 'postInvoiceupdate_reponsecategory',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ResponseCategoryDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/update_responsecategory_workarea',
    alias: 'postInvoiceupdate_responsecategory_workarea',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ResponseCategory_WorkAreaDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Invoice/update_targetcollectiondate_invoices',
    alias: 'postInvoiceupdate_targetcollectiondate_invoices',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateTargetCollectionUpdatedInvoiceListDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Invoice/useraction_historylist/:invoiceNo/:pageSize/:pageNumber',
    alias: 'getInvoiceuseraction_historylistInvoiceNoPageSizePageNumber',
    requestFormat: 'json',
    parameters: [
      {
        name: 'invoiceNo',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'pageSize',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'pageNumber',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Logger/LogError',
    alias: 'postLoggerLogError',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: LoggerExceptionDTO,
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/Logger/LogInfo',
    alias: 'postLoggerLogInfo',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ message: z.string().nullable() }).partial(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/Logger/LogTrace',
    alias: 'postLoggerLogTrace',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ message: z.string().nullable() }).partial(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/Manager/cancel_scheduling_auto_client_email_request',
    alias: 'postManagercancel_scheduling_auto_client_email_request',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ScheduleAutoClientEmailInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/client_mail_types_list',
    alias: 'getManagerclient_mail_types_list',
    requestFormat: 'json',
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/get-admin-page-details',
    alias: 'getManagergetAdminPageDetails',
    requestFormat: 'json',
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/get-current-black-out-period',
    alias: 'postManagergetCurrentBlackOutPeriod',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: BlackOutPeriodDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/get-filered-resource-names',
    alias: 'getManagergetFileredResourceNames',
    requestFormat: 'json',
    parameters: [
      {
        name: 'resourceName',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/get-final-allocations-list',
    alias: 'postManagergetFinalAllocationsList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: FinalAllocationsDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/get-roles-list',
    alias: 'getManagergetRolesList',
    requestFormat: 'json',
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/get-user-roles-list',
    alias: 'postManagergetUserRolesList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UserRolesDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/invoicelist',
    alias: 'postManagerinvoicelist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ManagerInvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/list',
    alias: 'postManagerlist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ManagerSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/mail_frequency_list',
    alias: 'getManagermail_frequency_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'SelectedMailType',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/manager_name_list/:isManager/:isPartner/:isLOSLeader/:employeeId/:isSBULeader',
    alias:
      'getManagermanager_name_listIsManagerIsPartnerIsLOSLeaderEmployeeIdIsSBULeader',
    requestFormat: 'json',
    parameters: [
      {
        name: 'isManager',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isPartner',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'isLOSLeader',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isSBULeader',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/partner_debtor/invoices/:managerName/:partnerName/:debtorCode',
    alias: 'getManagerpartner_debtorinvoicesManagerNamePartnerNameDebtorCode',
    requestFormat: 'json',
    parameters: [
      {
        name: 'managerName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'partnerName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'debtorCode',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Manager/partner/invoices/:managerName/:partnerName',
    alias: 'getManagerpartnerinvoicesManagerNamePartnerName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'managerName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'partnerName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/schedule_auto_client_mail_auditlog_list',
    alias: 'postManagerschedule_auto_client_mail_auditlog_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ScheduleAutoClientEmail_AuditLogSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/schedule_autoclientemail',
    alias: 'postManagerschedule_autoclientemail',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ScheduleAutoClientEmailInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/schedule_black_out_period_auditlog_list',
    alias: 'postManagerschedule_black_out_period_auditlog_list',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ScheduleBlackOutPeriod_AuditLogSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/set-black-out-period',
    alias: 'postManagersetBlackOutPeriod',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: BlackOutPeriodDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/submit-user-role-assigned',
    alias: 'postManagersubmitUserRoleAssigned',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UserRoleCRUD_DTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/summarylist',
    alias: 'postManagersummarylist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ManagerSummarySearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Manager/update_partnerallocation',
    alias: 'postManagerupdate_partnerallocation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: PartnerAllocationDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Notification/rectifyemailresponse',
    alias: 'getNotificationrectifyemailresponse',
    requestFormat: 'json',
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Notification/saveemailresponse',
    alias: 'postNotificationsaveemailresponse',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ResponseMailContentDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Notification/sendemailmisc',
    alias: 'postNotificationsendemailmisc',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: SendEmailMiscInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Notification/sendemailmultiple',
    alias: 'postNotificationsendemailmultiple',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: SendEmailInputDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Partner/debtor/invoices/:partnerid/:debtorName',
    alias: 'getPartnerdebtorinvoicesPartneridDebtorName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'partnerid',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'debtorName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Partner/invoicelist',
    alias: 'postPartnerinvoicelist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: PartnerInvoiceSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Partner/invoices/:partnerName',
    alias: 'getPartnerinvoicesPartnerName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'partnerName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Partner/list',
    alias: 'postPartnerlist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: PartnerSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Partner/partner_name_list/:isManager/:employeeId/:roleId',
    alias: 'getPartnerpartner_name_listIsManagerEmployeeIdRoleId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'isManager',
        type: 'Path',
        schema: z.boolean(),
      },
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'roleId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Partner/partner/invoices/:debtorName/:partnerName',
    alias: 'getPartnerpartnerinvoicesDebtorNamePartnerName',
    requestFormat: 'json',
    parameters: [
      {
        name: 'debtorName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'partnerName',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Partner/summarylist',
    alias: 'postPartnersummarylist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: PartnerSummarySearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Reports/fileupload-report',
    alias: 'postReportsfileuploadReport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: FileUploadReportSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Reports/get_invoice_details/:mailguid',
    alias: 'getReportsget_invoice_detailsMailguid',
    requestFormat: 'json',
    parameters: [
      {
        name: 'mailguid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/Reports/get_mail_running_report/:id',
    alias: 'getReportsget_mail_running_reportId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Reports/mail_counts_datewise',
    alias: 'postReportsmail_counts_datewise',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: DispatchReportSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Reports/mail_list_for_date',
    alias: 'postReportsmail_list_for_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: EmailsListSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/Reports/soa-report',
    alias: 'postReportssoaReport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: SOAReportSearchDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_billing_daily_data/:start_date/:end_date',
    alias:
      'getTrendAnalysistrend_analysis_billing_daily_dataStart_dateEnd_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_billing_monthly_data/:start_month/:end_month',
    alias:
      'getTrendAnalysistrend_analysis_billing_monthly_dataStart_monthEnd_month',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_month',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_month',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_collection_daily_data/:start_date/:end_date',
    alias:
      'getTrendAnalysistrend_analysis_collection_daily_dataStart_dateEnd_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_collection_efficiency_daily_data/:start_date/:end_date',
    alias:
      'getTrendAnalysistrend_analysis_collection_efficiency_daily_dataStart_dateEnd_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_collection_efficiency_monthly_data/:start_month/:end_month',
    alias:
      'getTrendAnalysistrend_analysis_collection_efficiency_monthly_dataStart_monthEnd_month',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_month',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_month',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_collection_monthly_data/:start_month/:end_month',
    alias:
      'getTrendAnalysistrend_analysis_collection_monthly_dataStart_monthEnd_month',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_month',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_month',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_collection_performance_daily_data/:start_month/:end_month',
    alias:
      'getTrendAnalysistrend_analysis_collection_performance_daily_dataStart_monthEnd_month',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_month',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_month',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_collection_performance_monthly_data/:start_month/:end_month',
    alias:
      'getTrendAnalysistrend_analysis_collection_performance_monthly_dataStart_monthEnd_month',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_month',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_month',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_customer_payment_behavior_data',
    alias: 'getTrendAnalysistrend_analysis_customer_payment_behavior_data',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'end_date',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fetchRowNo',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'debtorName',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_customer_payment_behavior_debtorslist',
    alias:
      'getTrendAnalysistrend_analysis_customer_payment_behavior_debtorslist',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'end_date',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_customer_payment_behavior_report_data',
    alias:
      'getTrendAnalysistrend_analysis_customer_payment_behavior_report_data',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'end_date',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fetchRowNo',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'debtorName',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_followup_dates/:start_date/:end_date',
    alias: 'getTrendAnalysistrend_analysis_followup_datesStart_dateEnd_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_invoice_counts_daily_data/:start_date/:end_date',
    alias:
      'getTrendAnalysistrend_analysis_invoice_counts_daily_dataStart_dateEnd_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_invoice_counts_monthly_data/:start_date/:end_date',
    alias:
      'getTrendAnalysistrend_analysis_invoice_counts_monthly_dataStart_dateEnd_date',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trend_analysis_top_customer_analysis_data/:start_date/:end_date/:fetchRowNo',
    alias:
      'getTrendAnalysistrend_analysis_top_customer_analysis_dataStart_dateEnd_dateFetchRowNo',
    requestFormat: 'json',
    parameters: [
      {
        name: 'start_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'end_date',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'fetchRowNo',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trendanalysis_debtorcategory_list/:employeeId/:isAllDebtorCategory',
    alias:
      'getTrendAnalysistrendanalysis_debtorcategory_listEmployeeIdIsAllDebtorCategory',
    requestFormat: 'json',
    parameters: [
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isAllDebtorCategory',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/TrendAnalysis/trendanalysis_los_list/:employeeId/:isAllLOS',
    alias: 'getTrendAnalysistrendanalysis_los_listEmployeeIdIsAllLOS',
    requestFormat: 'json',
    parameters: [
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'isAllLOS',
        type: 'Path',
        schema: z.boolean(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'post',
    path: '/User/add_sessionhistory',
    alias: 'postUseradd_sessionhistory',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UserSessionDTO,
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/User/authenticate/:empGuid',
    alias: 'getUserauthenticateEmpGuid',
    requestFormat: 'json',
    parameters: [
      {
        name: 'empGuid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: UserDTO,
  },
  {
    method: 'get',
    path: '/User/details/:employeeId',
    alias: 'getUserdetailsEmployeeId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'employeeId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
  {
    method: 'get',
    path: '/User/empdetails/:email',
    alias: 'getUserempdetailsEmail',
    requestFormat: 'json',
    parameters: [
      {
        name: 'email',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: APIResultDTO,
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
