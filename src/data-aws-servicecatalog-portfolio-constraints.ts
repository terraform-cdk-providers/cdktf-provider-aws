// https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServicecatalogPortfolioConstraintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}
  */
  readonly portfolioId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#product_id DataAwsServicecatalogPortfolioConstraints#product_id}
  */
  readonly productId?: string;
}
export class DataAwsServicecatalogPortfolioConstraintsDetails extends cdktf.ComplexComputedList {

  // constraint_id - computed: true, optional: false, required: false
  public get constraintId() {
    return this.getStringAttribute('constraint_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // portfolio_id - computed: true, optional: false, required: false
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints}
*/
export class DataAwsServicecatalogPortfolioConstraints extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServicecatalogPortfolioConstraintsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConstraintsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_portfolio_constraints',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._portfolioId = config.portfolioId;
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

  // details - computed: true, optional: false, required: false
  public details(index: string) {
    return new DataAwsServicecatalogPortfolioConstraintsDetails(this, 'details', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // portfolio_id - computed: false, optional: false, required: true
  private _portfolioId: string;
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }
  public set portfolioId(value: string) {
    this._portfolioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portfolioIdInput() {
    return this._portfolioId
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string ) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      portfolio_id: cdktf.stringToTerraform(this._portfolioId),
      product_id: cdktf.stringToTerraform(this._productId),
    };
  }
}
