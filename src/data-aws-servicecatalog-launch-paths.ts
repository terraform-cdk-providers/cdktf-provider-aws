// https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServicecatalogLaunchPathsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html#accept_language DataAwsServicecatalogLaunchPaths#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html#product_id DataAwsServicecatalogLaunchPaths#product_id}
  */
  readonly productId: string;
}
export class DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsServicecatalogLaunchPathsSummaries extends cdktf.ComplexComputedList {

  // constraint_summaries - computed: true, optional: false, required: false
  public get constraintSummaries() {
    return this.interpolationForAttribute('constraint_summaries') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_id - computed: true, optional: false, required: false
  public get pathId() {
    return this.getStringAttribute('path_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths}
*/
export class DataAwsServicecatalogLaunchPaths extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServicecatalogLaunchPathsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServicecatalogLaunchPathsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_launch_paths',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._productId = config.productId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string ) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // summaries - computed: true, optional: false, required: false
  public summaries(index: string) {
    return new DataAwsServicecatalogLaunchPathsSummaries(this, 'summaries', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      product_id: cdktf.stringToTerraform(this._productId),
    };
  }
}
