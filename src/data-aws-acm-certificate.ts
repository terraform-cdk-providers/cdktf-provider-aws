// https://www.terraform.io/docs/providers/aws/d/acm_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAcmCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#domain DataAwsAcmCertificate#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#key_types DataAwsAcmCertificate#key_types}
  */
  readonly keyTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#most_recent DataAwsAcmCertificate#most_recent}
  */
  readonly mostRecent?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#statuses DataAwsAcmCertificate#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#tags DataAwsAcmCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#types DataAwsAcmCertificate#types}
  */
  readonly types?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html aws_acm_certificate}
*/
export class DataAwsAcmCertificate extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html aws_acm_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAcmCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAcmCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._keyTypes = config.keyTypes;
    this._mostRecent = config.mostRecent;
    this._statuses = config.statuses;
    this._tags = config.tags;
    this._types = config.types;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_types - computed: false, optional: true, required: false
  private _keyTypes?: string[];
  public get keyTypes() {
    return this.getListAttribute('key_types');
  }
  public set keyTypes(value: string[] ) {
    this._keyTypes = value;
  }
  public resetKeyTypes() {
    this._keyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypesInput() {
    return this._keyTypes
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean ) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[];
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[] ) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[] ) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      key_types: cdktf.listMapper(cdktf.stringToTerraform)(this._keyTypes),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      statuses: cdktf.listMapper(cdktf.stringToTerraform)(this._statuses),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      types: cdktf.listMapper(cdktf.stringToTerraform)(this._types),
    };
  }
}
