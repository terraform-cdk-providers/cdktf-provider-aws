// https://www.terraform.io/docs/providers/aws/r/transfer_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferServerConfig extends cdktf.TerraformMetaArguments {
  readonly certificate?: string;
  readonly endpointType?: string;
  readonly forceDestroy?: boolean;
  readonly hostKey?: string;
  readonly identityProviderType?: string;
  readonly invocationRole?: string;
  readonly loggingRole?: string;
  readonly protocols?: string[];
  readonly securityPolicyName?: string;
  readonly tags?: { [key: string]: string };
  readonly tagsAll?: { [key: string]: string };
  readonly url?: string;
  /** endpoint_details block */
  readonly endpointDetails?: TransferServerEndpointDetails[];
}
export interface TransferServerEndpointDetails {
  readonly addressAllocationIds?: string[];
  readonly subnetIds?: string[];
  readonly vpcEndpointId?: string;
  readonly vpcId?: string;
}

function transferServerEndpointDetailsToTerraform(struct?: TransferServerEndpointDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_allocation_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressAllocationIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


// Resource

export class TransferServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TransferServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_server',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._endpointType = config.endpointType;
    this._forceDestroy = config.forceDestroy;
    this._hostKey = config.hostKey;
    this._identityProviderType = config.identityProviderType;
    this._invocationRole = config.invocationRole;
    this._loggingRole = config.loggingRole;
    this._protocols = config.protocols;
    this._securityPolicyName = config.securityPolicyName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._url = config.url;
    this._endpointDetails = config.endpointDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string;
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string;
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string ) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string;
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string ) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey
  }

  // host_key_fingerprint - computed: true, optional: false, required: false
  public get hostKeyFingerprint() {
    return this.getStringAttribute('host_key_fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_type - computed: false, optional: true, required: false
  private _identityProviderType?: string;
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }
  public set identityProviderType(value: string ) {
    this._identityProviderType = value;
  }
  public resetIdentityProviderType() {
    this._identityProviderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderTypeInput() {
    return this._identityProviderType
  }

  // invocation_role - computed: false, optional: true, required: false
  private _invocationRole?: string;
  public get invocationRole() {
    return this.getStringAttribute('invocation_role');
  }
  public set invocationRole(value: string ) {
    this._invocationRole = value;
  }
  public resetInvocationRole() {
    this._invocationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationRoleInput() {
    return this._invocationRole
  }

  // logging_role - computed: false, optional: true, required: false
  private _loggingRole?: string;
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }
  public set loggingRole(value: string ) {
    this._loggingRole = value;
  }
  public resetLoggingRole() {
    this._loggingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRoleInput() {
    return this._loggingRole
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[];
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols
  }

  // security_policy_name - computed: false, optional: true, required: false
  private _securityPolicyName?: string;
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }
  public set securityPolicyName(value: string ) {
    this._securityPolicyName = value;
  }
  public resetSecurityPolicyName() {
    this._securityPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyNameInput() {
    return this._securityPolicyName
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

  // url - computed: false, optional: true, required: false
  private _url?: string;
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string ) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // endpoint_details - computed: false, optional: true, required: false
  private _endpointDetails?: TransferServerEndpointDetails[];
  public get endpointDetails() {
    return this.interpolationForAttribute('endpoint_details') as any;
  }
  public set endpointDetails(value: TransferServerEndpointDetails[] ) {
    this._endpointDetails = value;
  }
  public resetEndpointDetails() {
    this._endpointDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDetailsInput() {
    return this._endpointDetails
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      host_key: cdktf.stringToTerraform(this._hostKey),
      identity_provider_type: cdktf.stringToTerraform(this._identityProviderType),
      invocation_role: cdktf.stringToTerraform(this._invocationRole),
      logging_role: cdktf.stringToTerraform(this._loggingRole),
      protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._protocols),
      security_policy_name: cdktf.stringToTerraform(this._securityPolicyName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      url: cdktf.stringToTerraform(this._url),
      endpoint_details: cdktf.listMapper(transferServerEndpointDetailsToTerraform)(this._endpointDetails),
    };
  }
}
