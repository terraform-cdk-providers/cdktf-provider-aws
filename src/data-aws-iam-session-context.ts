// https://www.terraform.io/docs/providers/aws/d/iam_session_context.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIamSessionContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html#arn DataAwsIamSessionContext#arn}
  */
  readonly arn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context}
*/
export class DataAwsIamSessionContext extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamSessionContextConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamSessionContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_session_context',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_arn - computed: true, optional: false, required: false
  public get issuerArn() {
    return this.getStringAttribute('issuer_arn');
  }

  // issuer_id - computed: true, optional: false, required: false
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }

  // issuer_name - computed: true, optional: false, required: false
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }

  // session_name - computed: true, optional: false, required: false
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
    };
  }
}
