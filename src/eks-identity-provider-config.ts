// https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksIdentityProviderConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#cluster_name EksIdentityProviderConfig#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags EksIdentityProviderConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags_all EksIdentityProviderConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#oidc EksIdentityProviderConfig#oidc}
  */
  readonly oidc: EksIdentityProviderConfigOidc[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#timeouts EksIdentityProviderConfig#timeouts}
  */
  readonly timeouts?: EksIdentityProviderConfigTimeouts;
}
export interface EksIdentityProviderConfigOidc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#client_id EksIdentityProviderConfig#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_claim EksIdentityProviderConfig#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_prefix EksIdentityProviderConfig#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}
  */
  readonly identityProviderConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#issuer_url EksIdentityProviderConfig#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#required_claims EksIdentityProviderConfig#required_claims}
  */
  readonly requiredClaims?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_claim EksIdentityProviderConfig#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_prefix EksIdentityProviderConfig#username_prefix}
  */
  readonly usernamePrefix?: string;
}

function eksIdentityProviderConfigOidcToTerraform(struct?: EksIdentityProviderConfigOidc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    identity_provider_config_name: cdktf.stringToTerraform(struct!.identityProviderConfigName),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claims: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requiredClaims),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}

export interface EksIdentityProviderConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#create EksIdentityProviderConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#delete EksIdentityProviderConfig#delete}
  */
  readonly delete?: string;
}

function eksIdentityProviderConfigTimeoutsToTerraform(struct?: EksIdentityProviderConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config}
*/
export class EksIdentityProviderConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksIdentityProviderConfigConfig
  */
  public constructor(scope: Construct, id: string, config: EksIdentityProviderConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_identity_provider_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._oidc = config.oidc;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // oidc - computed: false, optional: false, required: true
  private _oidc: EksIdentityProviderConfigOidc[];
  public get oidc() {
    return this.interpolationForAttribute('oidc') as any;
  }
  public set oidc(value: EksIdentityProviderConfigOidc[]) {
    this._oidc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksIdentityProviderConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EksIdentityProviderConfigTimeouts ) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      oidc: cdktf.listMapper(eksIdentityProviderConfigOidcToTerraform)(this._oidc),
      timeouts: eksIdentityProviderConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
