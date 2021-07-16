// https://www.terraform.io/docs/providers/aws/r/rds_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}
  */
  readonly allowMajorVersionUpgrade?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#apply_immediately RdsCluster#apply_immediately}
  */
  readonly applyImmediately?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#availability_zones RdsCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backtrack_window RdsCluster#backtrack_window}
  */
  readonly backtrackWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backup_retention_period RdsCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier RdsCluster#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}
  */
  readonly clusterIdentifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_members RdsCluster#cluster_members}
  */
  readonly clusterMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#database_name RdsCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}
  */
  readonly dbClusterParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_subnet_group_name RdsCluster#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#deletion_protection RdsCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enable_http_endpoint RdsCluster#enable_http_endpoint}
  */
  readonly enableHttpEndpoint?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}
  */
  readonly enabledCloudwatchLogsExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine RdsCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_mode RdsCluster#engine_mode}
  */
  readonly engineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_version RdsCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#final_snapshot_identifier RdsCluster#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#global_cluster_identifier RdsCluster#global_cluster_identifier}
  */
  readonly globalClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}
  */
  readonly iamDatabaseAuthenticationEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_roles RdsCluster#iam_roles}
  */
  readonly iamRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#kms_key_id RdsCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_password RdsCluster#master_password}
  */
  readonly masterPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_username RdsCluster#master_username}
  */
  readonly masterUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#port RdsCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_backup_window RdsCluster#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_maintenance_window RdsCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#replication_source_identifier RdsCluster#replication_source_identifier}
  */
  readonly replicationSourceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#skip_final_snapshot RdsCluster#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#snapshot_identifier RdsCluster#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_region RdsCluster#source_region}
  */
  readonly sourceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#storage_encrypted RdsCluster#storage_encrypted}
  */
  readonly storageEncrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags RdsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags_all RdsCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#vpc_security_group_ids RdsCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * restore_to_point_in_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_point_in_time RdsCluster#restore_to_point_in_time}
  */
  readonly restoreToPointInTime?: RdsClusterRestoreToPointInTime[];
  /**
  * s3_import block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#s3_import RdsCluster#s3_import}
  */
  readonly s3Import?: RdsClusterS3Import[];
  /**
  * scaling_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#scaling_configuration RdsCluster#scaling_configuration}
  */
  readonly scalingConfiguration?: RdsClusterScalingConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeouts RdsCluster#timeouts}
  */
  readonly timeouts?: RdsClusterTimeouts;
}
export interface RdsClusterRestoreToPointInTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_time RdsCluster#restore_to_time}
  */
  readonly restoreToTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_type RdsCluster#restore_type}
  */
  readonly restoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_cluster_identifier RdsCluster#source_cluster_identifier}
  */
  readonly sourceClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#use_latest_restorable_time RdsCluster#use_latest_restorable_time}
  */
  readonly useLatestRestorableTime?: boolean;
}

function rdsClusterRestoreToPointInTimeToTerraform(struct?: RdsClusterRestoreToPointInTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    restore_to_time: cdktf.stringToTerraform(struct!.restoreToTime),
    restore_type: cdktf.stringToTerraform(struct!.restoreType),
    source_cluster_identifier: cdktf.stringToTerraform(struct!.sourceClusterIdentifier),
    use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
  }
}

export interface RdsClusterS3Import {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_name RdsCluster#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_prefix RdsCluster#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#ingestion_role RdsCluster#ingestion_role}
  */
  readonly ingestionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine RdsCluster#source_engine}
  */
  readonly sourceEngine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine_version RdsCluster#source_engine_version}
  */
  readonly sourceEngineVersion: string;
}

function rdsClusterS3ImportToTerraform(struct?: RdsClusterS3Import): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    ingestion_role: cdktf.stringToTerraform(struct!.ingestionRole),
    source_engine: cdktf.stringToTerraform(struct!.sourceEngine),
    source_engine_version: cdktf.stringToTerraform(struct!.sourceEngineVersion),
  }
}

export interface RdsClusterScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#auto_pause RdsCluster#auto_pause}
  */
  readonly autoPause?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#max_capacity RdsCluster#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#min_capacity RdsCluster#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}
  */
  readonly secondsUntilAutoPause?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeout_action RdsCluster#timeout_action}
  */
  readonly timeoutAction?: string;
}

function rdsClusterScalingConfigurationToTerraform(struct?: RdsClusterScalingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_pause: cdktf.booleanToTerraform(struct!.autoPause),
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seconds_until_auto_pause: cdktf.numberToTerraform(struct!.secondsUntilAutoPause),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
  }
}

export interface RdsClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#create RdsCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#delete RdsCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#update RdsCluster#update}
  */
  readonly update?: string;
}

function rdsClusterTimeoutsToTerraform(struct?: RdsClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster}
*/
export class RdsCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RdsClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
    this._applyImmediately = config.applyImmediately;
    this._availabilityZones = config.availabilityZones;
    this._backtrackWindow = config.backtrackWindow;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
    this._clusterMembers = config.clusterMembers;
    this._copyTagsToSnapshot = config.copyTagsToSnapshot;
    this._databaseName = config.databaseName;
    this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deletionProtection = config.deletionProtection;
    this._enableHttpEndpoint = config.enableHttpEndpoint;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineMode = config.engineMode;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
    this._iamRoles = config.iamRoles;
    this._kmsKeyId = config.kmsKeyId;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._replicationSourceIdentifier = config.replicationSourceIdentifier;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._sourceRegion = config.sourceRegion;
    this._storageEncrypted = config.storageEncrypted;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._restoreToPointInTime = config.restoreToPointInTime;
    this._s3Import = config.s3Import;
    this._scalingConfiguration = config.scalingConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_major_version_upgrade - computed: false, optional: true, required: false
  private _allowMajorVersionUpgrade?: boolean;
  public get allowMajorVersionUpgrade() {
    return this.getBooleanAttribute('allow_major_version_upgrade');
  }
  public set allowMajorVersionUpgrade(value: boolean ) {
    this._allowMajorVersionUpgrade = value;
  }
  public resetAllowMajorVersionUpgrade() {
    this._allowMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMajorVersionUpgradeInput() {
    return this._allowMajorVersionUpgrade
  }

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

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // backtrack_window - computed: false, optional: true, required: false
  private _backtrackWindow?: number;
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }
  public set backtrackWindow(value: number ) {
    this._backtrackWindow = value;
  }
  public resetBacktrackWindow() {
    this._backtrackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backtrackWindowInput() {
    return this._backtrackWindow
  }

  // backup_retention_period - computed: false, optional: true, required: false
  private _backupRetentionPeriod?: number;
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number ) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod
  }

  // cluster_identifier - computed: true, optional: true, required: false
  private _clusterIdentifier?: string;
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }

  // cluster_identifier_prefix - computed: true, optional: true, required: false
  private _clusterIdentifierPrefix?: string;
  public get clusterIdentifierPrefix() {
    return this.getStringAttribute('cluster_identifier_prefix');
  }
  public set clusterIdentifierPrefix(value: string) {
    this._clusterIdentifierPrefix = value;
  }
  public resetClusterIdentifierPrefix() {
    this._clusterIdentifierPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierPrefixInput() {
    return this._clusterIdentifierPrefix
  }

  // cluster_members - computed: true, optional: true, required: false
  private _clusterMembers?: string[];
  public get clusterMembers() {
    return this.getListAttribute('cluster_members');
  }
  public set clusterMembers(value: string[]) {
    this._clusterMembers = value;
  }
  public resetClusterMembers() {
    this._clusterMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMembersInput() {
    return this._clusterMembers
  }

  // cluster_resource_id - computed: true, optional: false, required: false
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean;
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean ) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // db_cluster_parameter_group_name - computed: true, optional: true, required: false
  private _dbClusterParameterGroupName?: string;
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }
  public set dbClusterParameterGroupName(value: string) {
    this._dbClusterParameterGroupName = value;
  }
  public resetDbClusterParameterGroupName() {
    this._dbClusterParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterParameterGroupNameInput() {
    return this._dbClusterParameterGroupName
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string;
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string) {
    this._dbSubnetGroupName = value;
  }
  public resetDbSubnetGroupName() {
    this._dbSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupNameInput() {
    return this._dbSubnetGroupName
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // enable_http_endpoint - computed: false, optional: true, required: false
  private _enableHttpEndpoint?: boolean;
  public get enableHttpEndpoint() {
    return this.getBooleanAttribute('enable_http_endpoint');
  }
  public set enableHttpEndpoint(value: boolean ) {
    this._enableHttpEndpoint = value;
  }
  public resetEnableHttpEndpoint() {
    this._enableHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpEndpointInput() {
    return this._enableHttpEndpoint
  }

  // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
  private _enabledCloudwatchLogsExports?: string[];
  public get enabledCloudwatchLogsExports() {
    return this.getListAttribute('enabled_cloudwatch_logs_exports');
  }
  public set enabledCloudwatchLogsExports(value: string[] ) {
    this._enabledCloudwatchLogsExports = value;
  }
  public resetEnabledCloudwatchLogsExports() {
    this._enabledCloudwatchLogsExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCloudwatchLogsExportsInput() {
    return this._enabledCloudwatchLogsExports
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // engine_mode - computed: false, optional: true, required: false
  private _engineMode?: string;
  public get engineMode() {
    return this.getStringAttribute('engine_mode');
  }
  public set engineMode(value: string ) {
    this._engineMode = value;
  }
  public resetEngineMode() {
    this._engineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineModeInput() {
    return this._engineMode
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

  // global_cluster_identifier - computed: false, optional: true, required: false
  private _globalClusterIdentifier?: string;
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string ) {
    this._globalClusterIdentifier = value;
  }
  public resetGlobalClusterIdentifier() {
    this._globalClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // iam_database_authentication_enabled - computed: false, optional: true, required: false
  private _iamDatabaseAuthenticationEnabled?: boolean;
  public get iamDatabaseAuthenticationEnabled() {
    return this.getBooleanAttribute('iam_database_authentication_enabled');
  }
  public set iamDatabaseAuthenticationEnabled(value: boolean ) {
    this._iamDatabaseAuthenticationEnabled = value;
  }
  public resetIamDatabaseAuthenticationEnabled() {
    this._iamDatabaseAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamDatabaseAuthenticationEnabledInput() {
    return this._iamDatabaseAuthenticationEnabled
  }

  // iam_roles - computed: true, optional: true, required: false
  private _iamRoles?: string[];
  public get iamRoles() {
    return this.getListAttribute('iam_roles');
  }
  public set iamRoles(value: string[]) {
    this._iamRoles = value;
  }
  public resetIamRoles() {
    this._iamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRolesInput() {
    return this._iamRoles
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string;
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string ) {
    this._masterPassword = value;
  }
  public resetMasterPassword() {
    this._masterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword
  }

  // master_username - computed: true, optional: true, required: false
  private _masterUsername?: string;
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  public resetMasterUsername() {
    this._masterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string;
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow
  }

  // reader_endpoint - computed: true, optional: false, required: false
  public get readerEndpoint() {
    return this.getStringAttribute('reader_endpoint');
  }

  // replication_source_identifier - computed: false, optional: true, required: false
  private _replicationSourceIdentifier?: string;
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }
  public set replicationSourceIdentifier(value: string ) {
    this._replicationSourceIdentifier = value;
  }
  public resetReplicationSourceIdentifier() {
    this._replicationSourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceIdentifierInput() {
    return this._replicationSourceIdentifier
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean;
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean ) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot
  }

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string;
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }
  public set snapshotIdentifier(value: string ) {
    this._snapshotIdentifier = value;
  }
  public resetSnapshotIdentifier() {
    this._snapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdentifierInput() {
    return this._snapshotIdentifier
  }

  // source_region - computed: false, optional: true, required: false
  private _sourceRegion?: string;
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string ) {
    this._sourceRegion = value;
  }
  public resetSourceRegion() {
    this._sourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion
  }

  // storage_encrypted - computed: true, optional: true, required: false
  private _storageEncrypted?: boolean;
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted
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

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // restore_to_point_in_time - computed: false, optional: true, required: false
  private _restoreToPointInTime?: RdsClusterRestoreToPointInTime[];
  public get restoreToPointInTime() {
    return this.interpolationForAttribute('restore_to_point_in_time') as any;
  }
  public set restoreToPointInTime(value: RdsClusterRestoreToPointInTime[] ) {
    this._restoreToPointInTime = value;
  }
  public resetRestoreToPointInTime() {
    this._restoreToPointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToPointInTimeInput() {
    return this._restoreToPointInTime
  }

  // s3_import - computed: false, optional: true, required: false
  private _s3Import?: RdsClusterS3Import[];
  public get s3Import() {
    return this.interpolationForAttribute('s3_import') as any;
  }
  public set s3Import(value: RdsClusterS3Import[] ) {
    this._s3Import = value;
  }
  public resetS3Import() {
    this._s3Import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ImportInput() {
    return this._s3Import
  }

  // scaling_configuration - computed: false, optional: true, required: false
  private _scalingConfiguration?: RdsClusterScalingConfiguration[];
  public get scalingConfiguration() {
    return this.interpolationForAttribute('scaling_configuration') as any;
  }
  public set scalingConfiguration(value: RdsClusterScalingConfiguration[] ) {
    this._scalingConfiguration = value;
  }
  public resetScalingConfiguration() {
    this._scalingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationInput() {
    return this._scalingConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RdsClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RdsClusterTimeouts ) {
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
      allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
      cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
      copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
      database_name: cdktf.stringToTerraform(this._databaseName),
      db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
      enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
      engine: cdktf.stringToTerraform(this._engine),
      engine_mode: cdktf.stringToTerraform(this._engineMode),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
      iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      port: cdktf.numberToTerraform(this._port),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      source_region: cdktf.stringToTerraform(this._sourceRegion),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      restore_to_point_in_time: cdktf.listMapper(rdsClusterRestoreToPointInTimeToTerraform)(this._restoreToPointInTime),
      s3_import: cdktf.listMapper(rdsClusterS3ImportToTerraform)(this._s3Import),
      scaling_configuration: cdktf.listMapper(rdsClusterScalingConfigurationToTerraform)(this._scalingConfiguration),
      timeouts: rdsClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
