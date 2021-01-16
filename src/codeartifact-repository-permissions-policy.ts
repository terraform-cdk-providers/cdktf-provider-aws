// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodeartifactRepositoryPermissionsPolicyConfig extends TerraformMetaArguments {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly policyDocument: string;
  readonly policyRevision?: string;
  readonly repository: string;
}

// Resource

export class CodeartifactRepositoryPermissionsPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodeartifactRepositoryPermissionsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_repository_permissions_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._policyDocument = config.policyDocument;
    this._policyRevision = config.policyRevision;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // domain_owner - computed: true, optional: true, required: false
  private _domainOwner?: string;
  public get domainOwner() {
    return this._domainOwner ?? this.getStringAttribute('domain_owner');
  }
  public set domainOwner(value: string | undefined) {
    this._domainOwner = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument: string;
  public get policyDocument() {
    return this._policyDocument;
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }

  // policy_revision - computed: true, optional: true, required: false
  private _policyRevision?: string;
  public get policyRevision() {
    return this._policyRevision ?? this.getStringAttribute('policy_revision');
  }
  public set policyRevision(value: string | undefined) {
    this._policyRevision = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // resource_arn - computed: true, optional: false, required: true
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      domain_owner: this._domainOwner,
      policy_document: this._policyDocument,
      policy_revision: this._policyRevision,
      repository: this._repository,
    };
  }
}
