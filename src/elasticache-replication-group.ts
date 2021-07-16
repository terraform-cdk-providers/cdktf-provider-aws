// https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#apply_immediately ElasticacheReplicationGroup#apply_immediately}
  */
  readonly applyImmediately?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}
  */
  readonly atRestEncryptionEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#auth_token ElasticacheReplicationGroup#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}
  */
  readonly automaticFailoverEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#availability_zones ElasticacheReplicationGroup#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#engine ElasticacheReplicationGroup#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#engine_version ElasticacheReplicationGroup#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}
  */
  readonly globalReplicationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#kms_key_id ElasticacheReplicationGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#maintenance_window ElasticacheReplicationGroup#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}
  */
  readonly multiAzEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#node_type ElasticacheReplicationGroup#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}
  */
  readonly numberCacheClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#port ElasticacheReplicationGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replication_group_description ElasticacheReplicationGroup#replication_group_description}
  */
  readonly replicationGroupDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replication_group_id ElasticacheReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#security_group_ids ElasticacheReplicationGroup#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#security_group_names ElasticacheReplicationGroup#security_group_names}
  */
  readonly securityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}
  */
  readonly snapshotArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_name ElasticacheReplicationGroup#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_window ElasticacheReplicationGroup#snapshot_window}
  */
  readonly snapshotWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}
  */
  readonly subnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#tags ElasticacheReplicationGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#tags_all ElasticacheReplicationGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}
  */
  readonly transitEncryptionEnabled?: boolean;
  /**
  * cluster_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#cluster_mode ElasticacheReplicationGroup#cluster_mode}
  */
  readonly clusterMode?: ElasticacheReplicationGroupClusterMode[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#timeouts ElasticacheReplicationGroup#timeouts}
  */
  readonly timeouts?: ElasticacheReplicationGroupTimeouts;
}
export interface ElasticacheReplicationGroupClusterMode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#num_node_groups ElasticacheReplicationGroup#num_node_groups}
  */
  readonly numNodeGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}
  */
  readonly replicasPerNodeGroup: number;
}

function elasticacheReplicationGroupClusterModeToTerraform(struct?: ElasticacheReplicationGroupClusterMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_node_groups: cdktf.numberToTerraform(struct!.numNodeGroups),
    replicas_per_node_group: cdktf.numberToTerraform(struct!.replicasPerNodeGroup),
  }
}

export interface ElasticacheReplicationGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#create ElasticacheReplicationGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#delete ElasticacheReplicationGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#update ElasticacheReplicationGroup#update}
  */
  readonly update?: string;
}

function elasticacheReplicationGroupTimeoutsToTerraform(struct?: ElasticacheReplicationGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group}
*/
export class ElasticacheReplicationGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_replication_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyImmediately = config.applyImmediately;
    this._atRestEncryptionEnabled = config.atRestEncryptionEnabled;
    this._authToken = config.authToken;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._automaticFailoverEnabled = config.automaticFailoverEnabled;
    this._availabilityZones = config.availabilityZones;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._globalReplicationGroupId = config.globalReplicationGroupId;
    this._kmsKeyId = config.kmsKeyId;
    this._maintenanceWindow = config.maintenanceWindow;
    this._multiAzEnabled = config.multiAzEnabled;
    this._nodeType = config.nodeType;
    this._notificationTopicArn = config.notificationTopicArn;
    this._numberCacheClusters = config.numberCacheClusters;
    this._parameterGroupName = config.parameterGroupName;
    this._port = config.port;
    this._replicationGroupDescription = config.replicationGroupDescription;
    this._replicationGroupId = config.replicationGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._securityGroupNames = config.securityGroupNames;
    this._snapshotArns = config.snapshotArns;
    this._snapshotName = config.snapshotName;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._snapshotWindow = config.snapshotWindow;
    this._subnetGroupName = config.subnetGroupName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitEncryptionEnabled = config.transitEncryptionEnabled;
    this._clusterMode = config.clusterMode;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // at_rest_encryption_enabled - computed: true, optional: true, required: false
  private _atRestEncryptionEnabled?: boolean;
  public get atRestEncryptionEnabled() {
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }
  public set atRestEncryptionEnabled(value: boolean) {
    this._atRestEncryptionEnabled = value;
  }
  public resetAtRestEncryptionEnabled() {
    this._atRestEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atRestEncryptionEnabledInput() {
    return this._atRestEncryptionEnabled
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string;
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string ) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean ) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade
  }

  // automatic_failover_enabled - computed: false, optional: true, required: false
  private _automaticFailoverEnabled?: boolean;
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }
  public set automaticFailoverEnabled(value: boolean ) {
    this._automaticFailoverEnabled = value;
  }
  public resetAutomaticFailoverEnabled() {
    this._automaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFailoverEnabledInput() {
    return this._automaticFailoverEnabled
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] ) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // cluster_enabled - computed: true, optional: false, required: false
  public get clusterEnabled() {
    return this.getBooleanAttribute('cluster_enabled');
  }

  // configuration_endpoint_address - computed: true, optional: false, required: false
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string ) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // engine_version_actual - computed: true, optional: false, required: false
  public get engineVersionActual() {
    return this.getStringAttribute('engine_version_actual');
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string;
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }
  public set finalSnapshotIdentifier(value: string ) {
    this._finalSnapshotIdentifier = value;
  }
  public resetFinalSnapshotIdentifier() {
    this._finalSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotIdentifierInput() {
    return this._finalSnapshotIdentifier
  }

  // global_replication_group_id - computed: true, optional: true, required: false
  private _globalReplicationGroupId?: string;
  public get globalReplicationGroupId() {
    return this.getStringAttribute('global_replication_group_id');
  }
  public set globalReplicationGroupId(value: string) {
    this._globalReplicationGroupId = value;
  }
  public resetGlobalReplicationGroupId() {
    this._globalReplicationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupIdInput() {
    return this._globalReplicationGroupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string;
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow
  }

  // member_clusters - computed: true, optional: false, required: false
  public get memberClusters() {
    return this.getListAttribute('member_clusters');
  }

  // multi_az_enabled - computed: false, optional: true, required: false
  private _multiAzEnabled?: boolean;
  public get multiAzEnabled() {
    return this.getBooleanAttribute('multi_az_enabled');
  }
  public set multiAzEnabled(value: boolean ) {
    this._multiAzEnabled = value;
  }
  public resetMultiAzEnabled() {
    this._multiAzEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzEnabledInput() {
    return this._multiAzEnabled
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string;
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string;
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string ) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn
  }

  // number_cache_clusters - computed: true, optional: true, required: false
  private _numberCacheClusters?: number;
  public get numberCacheClusters() {
    return this.getNumberAttribute('number_cache_clusters');
  }
  public set numberCacheClusters(value: number) {
    this._numberCacheClusters = value;
  }
  public resetNumberCacheClusters() {
    this._numberCacheClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberCacheClustersInput() {
    return this._numberCacheClusters
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string;
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // primary_endpoint_address - computed: true, optional: false, required: false
  public get primaryEndpointAddress() {
    return this.getStringAttribute('primary_endpoint_address');
  }

  // reader_endpoint_address - computed: true, optional: false, required: false
  public get readerEndpointAddress() {
    return this.getStringAttribute('reader_endpoint_address');
  }

  // replication_group_description - computed: false, optional: false, required: true
  private _replicationGroupDescription: string;
  public get replicationGroupDescription() {
    return this.getStringAttribute('replication_group_description');
  }
  public set replicationGroupDescription(value: string) {
    this._replicationGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupDescriptionInput() {
    return this._replicationGroupDescription
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId: string;
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // security_group_names - computed: true, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this.getListAttribute('security_group_names');
  }
  public set securityGroupNames(value: string[]) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames
  }

  // snapshot_arns - computed: false, optional: true, required: false
  private _snapshotArns?: string[];
  public get snapshotArns() {
    return this.getListAttribute('snapshot_arns');
  }
  public set snapshotArns(value: string[] ) {
    this._snapshotArns = value;
  }
  public resetSnapshotArns() {
    this._snapshotArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsInput() {
    return this._snapshotArns
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string;
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string ) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName
  }

  // snapshot_retention_limit - computed: false, optional: true, required: false
  private _snapshotRetentionLimit?: number;
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }
  public set snapshotRetentionLimit(value: number ) {
    this._snapshotRetentionLimit = value;
  }
  public resetSnapshotRetentionLimit() {
    this._snapshotRetentionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionLimitInput() {
    return this._snapshotRetentionLimit
  }

  // snapshot_window - computed: true, optional: true, required: false
  private _snapshotWindow?: string;
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string) {
    this._snapshotWindow = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string;
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string) {
    this._subnetGroupName = value;
  }
  public resetSubnetGroupName() {
    this._subnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupNameInput() {
    return this._subnetGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // transit_encryption_enabled - computed: true, optional: true, required: false
  private _transitEncryptionEnabled?: boolean;
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }
  public set transitEncryptionEnabled(value: boolean) {
    this._transitEncryptionEnabled = value;
  }
  public resetTransitEncryptionEnabled() {
    this._transitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionEnabledInput() {
    return this._transitEncryptionEnabled
  }

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: ElasticacheReplicationGroupClusterMode[];
  public get clusterMode() {
    return this.interpolationForAttribute('cluster_mode') as any;
  }
  public set clusterMode(value: ElasticacheReplicationGroupClusterMode[] ) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElasticacheReplicationGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ElasticacheReplicationGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      at_rest_encryption_enabled: cdktf.booleanToTerraform(this._atRestEncryptionEnabled),
      auth_token: cdktf.stringToTerraform(this._authToken),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      automatic_failover_enabled: cdktf.booleanToTerraform(this._automaticFailoverEnabled),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      global_replication_group_id: cdktf.stringToTerraform(this._globalReplicationGroupId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      multi_az_enabled: cdktf.booleanToTerraform(this._multiAzEnabled),
      node_type: cdktf.stringToTerraform(this._nodeType),
      notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
      number_cache_clusters: cdktf.numberToTerraform(this._numberCacheClusters),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      port: cdktf.numberToTerraform(this._port),
      replication_group_description: cdktf.stringToTerraform(this._replicationGroupDescription),
      replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
      snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotArns),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
      snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
      subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
      cluster_mode: cdktf.listMapper(elasticacheReplicationGroupClusterModeToTerraform)(this._clusterMode),
      timeouts: elasticacheReplicationGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
