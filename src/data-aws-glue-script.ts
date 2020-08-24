// https://www.terraform.io/docs/providers/aws/r/data_aws_glue_script.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsGlueScriptConfig extends TerraformMetaArguments {
  readonly language?: string;
  /** dag_edge block */
  readonly dagEdge: DataAwsGlueScriptDagEdge[];
  /** dag_node block */
  readonly dagNode: DataAwsGlueScriptDagNode[];
}
export interface DataAwsGlueScriptDagEdge {
  readonly source: string;
  readonly target: string;
  readonly targetParameter?: string;
}
export interface DataAwsGlueScriptDagNodeArgs {
  readonly name: string;
  readonly param?: boolean;
  readonly value: string;
}
export interface DataAwsGlueScriptDagNode {
  readonly id: string;
  readonly lineNumber?: number;
  readonly nodeType: string;
  /** args block */
  readonly args: DataAwsGlueScriptDagNodeArgs[];
}

// Resource

export class DataAwsGlueScript extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsGlueScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_script',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._language = config.language;
    this._dagEdge = config.dagEdge;
    this._dagNode = config.dagNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string;
  public get language() {
    return this._language;
  }
  public set language(value: string | undefined) {
    this._language = value;
  }

  // python_script - computed: true, optional: false, required: true
  public get pythonScript() {
    return this.getStringAttribute('python_script');
  }

  // scala_code - computed: true, optional: false, required: true
  public get scalaCode() {
    return this.getStringAttribute('scala_code');
  }

  // dag_edge - computed: false, optional: false, required: true
  private _dagEdge: DataAwsGlueScriptDagEdge[];
  public get dagEdge() {
    return this._dagEdge;
  }
  public set dagEdge(value: DataAwsGlueScriptDagEdge[]) {
    this._dagEdge = value;
  }

  // dag_node - computed: false, optional: false, required: true
  private _dagNode: DataAwsGlueScriptDagNode[];
  public get dagNode() {
    return this._dagNode;
  }
  public set dagNode(value: DataAwsGlueScriptDagNode[]) {
    this._dagNode = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      language: this._language,
      dag_edge: this._dagEdge,
      dag_node: this._dagNode,
    };
  }
}
