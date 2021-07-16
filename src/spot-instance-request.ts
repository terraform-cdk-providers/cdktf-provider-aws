// https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpotInstanceRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ami SpotInstanceRequest#ami}
  */
  readonly ami: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#availability_zone SpotInstanceRequest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#block_duration_minutes SpotInstanceRequest#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_core_count SpotInstanceRequest#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}
  */
  readonly cpuThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#disable_api_termination SpotInstanceRequest#disable_api_termination}
  */
  readonly disableApiTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_optimized SpotInstanceRequest#ebs_optimized}
  */
  readonly ebsOptimized?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#get_password_data SpotInstanceRequest#get_password_data}
  */
  readonly fetchPasswordData?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#hibernation SpotInstanceRequest#hibernation}
  */
  readonly hibernation?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#host_id SpotInstanceRequest#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iam_instance_profile SpotInstanceRequest#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}
  */
  readonly instanceInitiatedShutdownBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behaviour SpotInstanceRequest#instance_interruption_behaviour}
  */
  readonly instanceInterruptionBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_type SpotInstanceRequest#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_address_count SpotInstanceRequest#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_addresses SpotInstanceRequest#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#key_name SpotInstanceRequest#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#launch_group SpotInstanceRequest#launch_group}
  */
  readonly launchGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#monitoring SpotInstanceRequest#monitoring}
  */
  readonly monitoring?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#placement_group SpotInstanceRequest#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#private_ip SpotInstanceRequest#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#secondary_private_ips SpotInstanceRequest#secondary_private_ips}
  */
  readonly secondaryPrivateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#security_groups SpotInstanceRequest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#source_dest_check SpotInstanceRequest#source_dest_check}
  */
  readonly sourceDestCheck?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_price SpotInstanceRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_type SpotInstanceRequest#spot_type}
  */
  readonly spotType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#subnet_id SpotInstanceRequest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags_all SpotInstanceRequest#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tenancy SpotInstanceRequest#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data SpotInstanceRequest#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data_base64 SpotInstanceRequest#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_from SpotInstanceRequest#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_until SpotInstanceRequest#valid_until}
  */
  readonly validUntil?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_tags SpotInstanceRequest#volume_tags}
  */
  readonly volumeTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}
  */
  readonly waitForFulfillment?: boolean;
  /**
  * capacity_reservation_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: SpotInstanceRequestCapacityReservationSpecification[];
  /**
  * credit_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#credit_specification SpotInstanceRequest#credit_specification}
  */
  readonly creditSpecification?: SpotInstanceRequestCreditSpecification[];
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_block_device SpotInstanceRequest#ebs_block_device}
  */
  readonly ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
  /**
  * enclave_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enclave_options SpotInstanceRequest#enclave_options}
  */
  readonly enclaveOptions?: SpotInstanceRequestEnclaveOptions[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
  /**
  * metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#metadata_options SpotInstanceRequest#metadata_options}
  */
  readonly metadataOptions?: SpotInstanceRequestMetadataOptions[];
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface SpotInstanceRequest#network_interface}
  */
  readonly networkInterface?: SpotInstanceRequestNetworkInterface[];
  /**
  * root_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#root_block_device SpotInstanceRequest#root_block_device}
  */
  readonly rootBlockDevice?: SpotInstanceRequestRootBlockDevice[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#timeouts SpotInstanceRequest#timeouts}
  */
  readonly timeouts?: SpotInstanceRequestTimeouts;
}
export interface SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
}

function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
  }
}

export interface SpotInstanceRequestCapacityReservationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * capacity_reservation_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget[];
}

function spotInstanceRequestCapacityReservationSpecificationToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: cdktf.listMapper(spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct!.capacityReservationTarget),
  }
}

export interface SpotInstanceRequestCreditSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_credits SpotInstanceRequest#cpu_credits}
  */
  readonly cpuCredits?: string;
}

function spotInstanceRequestCreditSpecificationToTerraform(struct?: SpotInstanceRequestCreditSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
  }
}

export interface SpotInstanceRequestEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}
  */
  readonly encrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#snapshot_id SpotInstanceRequest#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}
  */
  readonly volumeType?: string;
}

function spotInstanceRequestEbsBlockDeviceToTerraform(struct?: SpotInstanceRequestEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface SpotInstanceRequestEnclaveOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enabled SpotInstanceRequest#enabled}
  */
  readonly enabled?: boolean;
}

function spotInstanceRequestEnclaveOptionsToTerraform(struct?: SpotInstanceRequestEnclaveOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface SpotInstanceRequestEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#no_device SpotInstanceRequest#no_device}
  */
  readonly noDevice?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#virtual_name SpotInstanceRequest#virtual_name}
  */
  readonly virtualName?: string;
}

function spotInstanceRequestEphemeralBlockDeviceToTerraform(struct?: SpotInstanceRequestEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.booleanToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface SpotInstanceRequestMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_endpoint SpotInstanceRequest#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_tokens SpotInstanceRequest#http_tokens}
  */
  readonly httpTokens?: string;
}

function spotInstanceRequestMetadataOptionsToTerraform(struct?: SpotInstanceRequestMetadataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export interface SpotInstanceRequestNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_index SpotInstanceRequest#device_index}
  */
  readonly deviceIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface_id SpotInstanceRequest#network_interface_id}
  */
  readonly networkInterfaceId: string;
}

function spotInstanceRequestNetworkInterfaceToTerraform(struct?: SpotInstanceRequestNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
  }
}

export interface SpotInstanceRequestRootBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}
  */
  readonly encrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}
  */
  readonly volumeType?: string;
}

function spotInstanceRequestRootBlockDeviceToTerraform(struct?: SpotInstanceRequestRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface SpotInstanceRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#create SpotInstanceRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete SpotInstanceRequest#delete}
  */
  readonly delete?: string;
}

function spotInstanceRequestTimeoutsToTerraform(struct?: SpotInstanceRequestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request}
*/
export class SpotInstanceRequest extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpotInstanceRequestConfig
  */
  public constructor(scope: Construct, id: string, config: SpotInstanceRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_spot_instance_request',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ami = config.ami;
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._availabilityZone = config.availabilityZone;
    this._blockDurationMinutes = config.blockDurationMinutes;
    this._cpuCoreCount = config.cpuCoreCount;
    this._cpuThreadsPerCore = config.cpuThreadsPerCore;
    this._disableApiTermination = config.disableApiTermination;
    this._ebsOptimized = config.ebsOptimized;
    this._getPasswordData = config.fetchPasswordData;
    this._hibernation = config.hibernation;
    this._hostId = config.hostId;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
    this._instanceInterruptionBehavior = config.instanceInterruptionBehavior;
    this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
    this._instanceType = config.instanceType;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses = config.ipv6Addresses;
    this._keyName = config.keyName;
    this._launchGroup = config.launchGroup;
    this._monitoring = config.monitoring;
    this._placementGroup = config.placementGroup;
    this._privateIp = config.privateIp;
    this._secondaryPrivateIps = config.secondaryPrivateIps;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._spotPrice = config.spotPrice;
    this._spotType = config.spotType;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tenancy = config.tenancy;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._volumeTags = config.volumeTags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._waitForFulfillment = config.waitForFulfillment;
    this._capacityReservationSpecification = config.capacityReservationSpecification;
    this._creditSpecification = config.creditSpecification;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._enclaveOptions = config.enclaveOptions;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._metadataOptions = config.metadataOptions;
    this._networkInterface = config.networkInterface;
    this._rootBlockDevice = config.rootBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami - computed: false, optional: false, required: true
  private _ami: string;
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: true, required: false
  private _associatePublicIpAddress?: boolean;
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number;
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: number ) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number;
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount
  }

  // cpu_threads_per_core - computed: true, optional: true, required: false
  private _cpuThreadsPerCore?: number;
  public get cpuThreadsPerCore() {
    return this.getNumberAttribute('cpu_threads_per_core');
  }
  public set cpuThreadsPerCore(value: number) {
    this._cpuThreadsPerCore = value;
  }
  public resetCpuThreadsPerCore() {
    this._cpuThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThreadsPerCoreInput() {
    return this._cpuThreadsPerCore
  }

  // disable_api_termination - computed: false, optional: true, required: false
  private _disableApiTermination?: boolean;
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean ) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean ) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized
  }

  // get_password_data - computed: false, optional: true, required: false
  private _getPasswordData?: boolean;
  public get fetchPasswordData() {
    return this.getBooleanAttribute('get_password_data');
  }
  public set fetchPasswordData(value: boolean ) {
    this._getPasswordData = value;
  }
  public resetFetchPasswordData() {
    this._getPasswordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchPasswordDataInput() {
    return this._getPasswordData
  }

  // hibernation - computed: false, optional: true, required: false
  private _hibernation?: boolean;
  public get hibernation() {
    return this.getBooleanAttribute('hibernation');
  }
  public set hibernation(value: boolean ) {
    this._hibernation = value;
  }
  public resetHibernation() {
    this._hibernation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationInput() {
    return this._hibernation
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string;
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string;
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string ) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_initiated_shutdown_behavior - computed: true, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string;
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }
  public set instanceInitiatedShutdownBehavior(value: string) {
    this._instanceInitiatedShutdownBehavior = value;
  }
  public resetInstanceInitiatedShutdownBehavior() {
    this._instanceInitiatedShutdownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInitiatedShutdownBehaviorInput() {
    return this._instanceInitiatedShutdownBehavior
  }

  // instance_interruption_behavior - computed: true, optional: true, required: false
  private _instanceInterruptionBehavior?: string;
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }
  public set instanceInterruptionBehavior(value: string) {
    this._instanceInterruptionBehavior = value;
  }
  public resetInstanceInterruptionBehavior() {
    this._instanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviorInput() {
    return this._instanceInterruptionBehavior
  }

  // instance_interruption_behaviour - computed: true, optional: true, required: false
  private _instanceInterruptionBehaviour?: string;
  public get instanceInterruptionBehaviour() {
    return this.getStringAttribute('instance_interruption_behaviour');
  }
  public set instanceInterruptionBehaviour(value: string) {
    this._instanceInterruptionBehaviour = value;
  }
  public resetInstanceInterruptionBehaviour() {
    this._instanceInterruptionBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviourInput() {
    return this._instanceInterruptionBehaviour
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number;
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[];
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // launch_group - computed: false, optional: true, required: false
  private _launchGroup?: string;
  public get launchGroup() {
    return this.getStringAttribute('launch_group');
  }
  public set launchGroup(value: string ) {
    this._launchGroup = value;
  }
  public resetLaunchGroup() {
    this._launchGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchGroupInput() {
    return this._launchGroup
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean;
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean ) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // password_data - computed: true, optional: false, required: false
  public get passwordData() {
    return this.getStringAttribute('password_data');
  }

  // placement_group - computed: true, optional: true, required: false
  private _placementGroup?: string;
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup
  }

  // primary_network_interface_id - computed: true, optional: false, required: false
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }

  // private_dns - computed: true, optional: false, required: false
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp
  }

  // public_dns - computed: true, optional: false, required: false
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // secondary_private_ips - computed: true, optional: true, required: false
  private _secondaryPrivateIps?: string[];
  public get secondaryPrivateIps() {
    return this.getListAttribute('secondary_private_ips');
  }
  public set secondaryPrivateIps(value: string[]) {
    this._secondaryPrivateIps = value;
  }
  public resetSecondaryPrivateIps() {
    this._secondaryPrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpsInput() {
    return this._secondaryPrivateIps
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean;
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean ) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck
  }

  // spot_bid_status - computed: true, optional: false, required: false
  public get spotBidStatus() {
    return this.getStringAttribute('spot_bid_status');
  }

  // spot_instance_id - computed: true, optional: false, required: false
  public get spotInstanceId() {
    return this.getStringAttribute('spot_instance_id');
  }

  // spot_price - computed: true, optional: true, required: false
  private _spotPrice?: string;
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice
  }

  // spot_request_state - computed: true, optional: false, required: false
  public get spotRequestState() {
    return this.getStringAttribute('spot_request_state');
  }

  // spot_type - computed: false, optional: true, required: false
  private _spotType?: string;
  public get spotType() {
    return this.getStringAttribute('spot_type');
  }
  public set spotType(value: string ) {
    this._spotType = value;
  }
  public resetSpotType() {
    this._spotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotTypeInput() {
    return this._spotType
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string;
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string ) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string;
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string ) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64
  }

  // valid_from - computed: true, optional: true, required: false
  private _validFrom?: string;
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string;
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil
  }

  // volume_tags - computed: false, optional: true, required: false
  private _volumeTags?: { [key: string]: string };
  public get volumeTags() {
    return this.interpolationForAttribute('volume_tags') as any;
  }
  public set volumeTags(value: { [key: string]: string } ) {
    this._volumeTags = value;
  }
  public resetVolumeTags() {
    this._volumeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTagsInput() {
    return this._volumeTags
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

  // wait_for_fulfillment - computed: false, optional: true, required: false
  private _waitForFulfillment?: boolean;
  public get waitForFulfillment() {
    return this.getBooleanAttribute('wait_for_fulfillment');
  }
  public set waitForFulfillment(value: boolean ) {
    this._waitForFulfillment = value;
  }
  public resetWaitForFulfillment() {
    this._waitForFulfillment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForFulfillmentInput() {
    return this._waitForFulfillment
  }

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification?: SpotInstanceRequestCapacityReservationSpecification[];
  public get capacityReservationSpecification() {
    return this.interpolationForAttribute('capacity_reservation_specification') as any;
  }
  public set capacityReservationSpecification(value: SpotInstanceRequestCapacityReservationSpecification[] ) {
    this._capacityReservationSpecification = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: SpotInstanceRequestCreditSpecification[];
  public get creditSpecification() {
    return this.interpolationForAttribute('credit_specification') as any;
  }
  public set creditSpecification(value: SpotInstanceRequestCreditSpecification[] ) {
    this._creditSpecification = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: SpotInstanceRequestEbsBlockDevice[] ) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice
  }

  // enclave_options - computed: false, optional: true, required: false
  private _enclaveOptions?: SpotInstanceRequestEnclaveOptions[];
  public get enclaveOptions() {
    return this.interpolationForAttribute('enclave_options') as any;
  }
  public set enclaveOptions(value: SpotInstanceRequestEnclaveOptions[] ) {
    this._enclaveOptions = value;
  }
  public resetEnclaveOptions() {
    this._enclaveOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveOptionsInput() {
    return this._enclaveOptions
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: SpotInstanceRequestEphemeralBlockDevice[] ) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: SpotInstanceRequestMetadataOptions[];
  public get metadataOptions() {
    return this.interpolationForAttribute('metadata_options') as any;
  }
  public set metadataOptions(value: SpotInstanceRequestMetadataOptions[] ) {
    this._metadataOptions = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: SpotInstanceRequestNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: SpotInstanceRequestNetworkInterface[] ) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: SpotInstanceRequestRootBlockDevice[];
  public get rootBlockDevice() {
    return this.interpolationForAttribute('root_block_device') as any;
  }
  public set rootBlockDevice(value: SpotInstanceRequestRootBlockDevice[] ) {
    this._rootBlockDevice = value;
  }
  public resetRootBlockDevice() {
    this._rootBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootBlockDeviceInput() {
    return this._rootBlockDevice
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpotInstanceRequestTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpotInstanceRequestTimeouts ) {
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
      ami: cdktf.stringToTerraform(this._ami),
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      block_duration_minutes: cdktf.numberToTerraform(this._blockDurationMinutes),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
      hibernation: cdktf.booleanToTerraform(this._hibernation),
      host_id: cdktf.stringToTerraform(this._hostId),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
      instance_interruption_behavior: cdktf.stringToTerraform(this._instanceInterruptionBehavior),
      instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
      key_name: cdktf.stringToTerraform(this._keyName),
      launch_group: cdktf.stringToTerraform(this._launchGroup),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      placement_group: cdktf.stringToTerraform(this._placementGroup),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      spot_type: cdktf.stringToTerraform(this._spotType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
      capacity_reservation_specification: cdktf.listMapper(spotInstanceRequestCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
      credit_specification: cdktf.listMapper(spotInstanceRequestCreditSpecificationToTerraform)(this._creditSpecification),
      ebs_block_device: cdktf.listMapper(spotInstanceRequestEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      enclave_options: cdktf.listMapper(spotInstanceRequestEnclaveOptionsToTerraform)(this._enclaveOptions),
      ephemeral_block_device: cdktf.listMapper(spotInstanceRequestEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      metadata_options: cdktf.listMapper(spotInstanceRequestMetadataOptionsToTerraform)(this._metadataOptions),
      network_interface: cdktf.listMapper(spotInstanceRequestNetworkInterfaceToTerraform)(this._networkInterface),
      root_block_device: cdktf.listMapper(spotInstanceRequestRootBlockDeviceToTerraform)(this._rootBlockDevice),
      timeouts: spotInstanceRequestTimeoutsToTerraform(this._timeouts),
    };
  }
}
