// https://www.terraform.io/docs/providers/aws/r/network_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkAclConfig extends TerraformMetaArguments {
  readonly egress?: NetworkAclEgress[];
  readonly ingress?: NetworkAclIngress[];
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
}
export interface NetworkAclEgress {
  readonly action?: string;
  readonly cidrBlock?: string;
  readonly fromPort?: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol?: string;
  readonly ruleNo?: number;
  readonly toPort?: number;
}
export interface NetworkAclIngress {
  readonly action?: string;
  readonly cidrBlock?: string;
  readonly fromPort?: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol?: string;
  readonly ruleNo?: number;
  readonly toPort?: number;
}

// Resource

export class NetworkAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._egress = config.egress;
    this._ingress = config.ingress;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: NetworkAclEgress[]
  public get egress(): NetworkAclEgress[] | undefined {
    return this._egress; // Getting the computed value is not yet implemented
  }
  public set egress(value: NetworkAclEgress[] | undefined) {
    this._egress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: NetworkAclIngress[]
  public get ingress(): NetworkAclIngress[] | undefined {
    return this._ingress; // Getting the computed value is not yet implemented
  }
  public set ingress(value: NetworkAclIngress[] | undefined) {
    this._ingress = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds ?? this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress: this._egress,
      ingress: this._ingress,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      vpc_id: this._vpcId,
    };
  }
}
