// https://www.terraform.io/docs/providers/aws/r/iam_access_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamAccessKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#pgp_key IamAccessKey#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#status IamAccessKey#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#user IamAccessKey#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key}
*/
export class IamAccessKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamAccessKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IamAccessKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_access_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._pgpKey = config.pgpKey;
    this._status = config.status;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // encrypted_secret - computed: true, optional: false, required: false
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
  }

  // encrypted_ses_smtp_password_v4 - computed: true, optional: false, required: false
  public get encryptedSesSmtpPasswordV4() {
    return this.getStringAttribute('encrypted_ses_smtp_password_v4');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string;
  public get pgpKey() {
    return this.getStringAttribute('pgp_key');
  }
  public set pgpKey(value: string ) {
    this._pgpKey = value;
  }
  public resetPgpKey() {
    this._pgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeyInput() {
    return this._pgpKey
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // ses_smtp_password_v4 - computed: true, optional: false, required: false
  public get sesSmtpPasswordV4() {
    return this.getStringAttribute('ses_smtp_password_v4');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      status: cdktf.stringToTerraform(this._status),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}
