// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}
  */
  readonly cacheKeyParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_namespace ApiGatewayIntegration#cache_namespace}
  */
  readonly cacheNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_id ApiGatewayIntegration#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_type ApiGatewayIntegration#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#content_handling ApiGatewayIntegration#content_handling}
  */
  readonly contentHandling?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#credentials ApiGatewayIntegration#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#http_method ApiGatewayIntegration#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#integration_http_method ApiGatewayIntegration#integration_http_method}
  */
  readonly integrationHttpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}
  */
  readonly passthroughBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_parameters ApiGatewayIntegration#request_parameters}
  */
  readonly requestParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_templates ApiGatewayIntegration#request_templates}
  */
  readonly requestTemplates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#resource_id ApiGatewayIntegration#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#rest_api_id ApiGatewayIntegration#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}
  */
  readonly timeoutMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#type ApiGatewayIntegration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#uri ApiGatewayIntegration#uri}
  */
  readonly uri?: string;
  /**
  * tls_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#tls_config ApiGatewayIntegration#tls_config}
  */
  readonly tlsConfig?: ApiGatewayIntegrationTlsConfig[];
}
export interface ApiGatewayIntegrationTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}
  */
  readonly insecureSkipVerification?: boolean;
}

function apiGatewayIntegrationTlsConfigToTerraform(struct?: ApiGatewayIntegrationTlsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    insecure_skip_verification: cdktf.booleanToTerraform(struct!.insecureSkipVerification),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration}
*/
export class ApiGatewayIntegration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheKeyParameters = config.cacheKeyParameters;
    this._cacheNamespace = config.cacheNamespace;
    this._connectionId = config.connectionId;
    this._connectionType = config.connectionType;
    this._contentHandling = config.contentHandling;
    this._credentials = config.credentials;
    this._httpMethod = config.httpMethod;
    this._integrationHttpMethod = config.integrationHttpMethod;
    this._passthroughBehavior = config.passthroughBehavior;
    this._requestParameters = config.requestParameters;
    this._requestTemplates = config.requestTemplates;
    this._resourceId = config.resourceId;
    this._restApiId = config.restApiId;
    this._timeoutMilliseconds = config.timeoutMilliseconds;
    this._type = config.type;
    this._uri = config.uri;
    this._tlsConfig = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_key_parameters - computed: false, optional: true, required: false
  private _cacheKeyParameters?: string[];
  public get cacheKeyParameters() {
    return this.getListAttribute('cache_key_parameters');
  }
  public set cacheKeyParameters(value: string[] ) {
    this._cacheKeyParameters = value;
  }
  public resetCacheKeyParameters() {
    this._cacheKeyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyParametersInput() {
    return this._cacheKeyParameters
  }

  // cache_namespace - computed: true, optional: true, required: false
  private _cacheNamespace?: string;
  public get cacheNamespace() {
    return this.getStringAttribute('cache_namespace');
  }
  public set cacheNamespace(value: string) {
    this._cacheNamespace = value;
  }
  public resetCacheNamespace() {
    this._cacheNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNamespaceInput() {
    return this._cacheNamespace
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string;
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string ) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string;
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string ) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType
  }

  // content_handling - computed: false, optional: true, required: false
  private _contentHandling?: string;
  public get contentHandling() {
    return this.getStringAttribute('content_handling');
  }
  public set contentHandling(value: string ) {
    this._contentHandling = value;
  }
  public resetContentHandling() {
    this._contentHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingInput() {
    return this._contentHandling
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string ) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod: string;
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_http_method - computed: false, optional: true, required: false
  private _integrationHttpMethod?: string;
  public get integrationHttpMethod() {
    return this.getStringAttribute('integration_http_method');
  }
  public set integrationHttpMethod(value: string ) {
    this._integrationHttpMethod = value;
  }
  public resetIntegrationHttpMethod() {
    this._integrationHttpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationHttpMethodInput() {
    return this._integrationHttpMethod
  }

  // passthrough_behavior - computed: true, optional: true, required: false
  private _passthroughBehavior?: string;
  public get passthroughBehavior() {
    return this.getStringAttribute('passthrough_behavior');
  }
  public set passthroughBehavior(value: string) {
    this._passthroughBehavior = value;
  }
  public resetPassthroughBehavior() {
    this._passthroughBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughBehaviorInput() {
    return this._passthroughBehavior
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string };
  public get requestParameters() {
    return this.interpolationForAttribute('request_parameters') as any;
  }
  public set requestParameters(value: { [key: string]: string } ) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters
  }

  // request_templates - computed: false, optional: true, required: false
  private _requestTemplates?: { [key: string]: string };
  public get requestTemplates() {
    return this.interpolationForAttribute('request_templates') as any;
  }
  public set requestTemplates(value: { [key: string]: string } ) {
    this._requestTemplates = value;
  }
  public resetRequestTemplates() {
    this._requestTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplatesInput() {
    return this._requestTemplates
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // timeout_milliseconds - computed: false, optional: true, required: false
  private _timeoutMilliseconds?: number;
  public get timeoutMilliseconds() {
    return this.getNumberAttribute('timeout_milliseconds');
  }
  public set timeoutMilliseconds(value: number ) {
    this._timeoutMilliseconds = value;
  }
  public resetTimeoutMilliseconds() {
    this._timeoutMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisecondsInput() {
    return this._timeoutMilliseconds
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string;
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string ) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: ApiGatewayIntegrationTlsConfig[];
  public get tlsConfig() {
    return this.interpolationForAttribute('tls_config') as any;
  }
  public set tlsConfig(value: ApiGatewayIntegrationTlsConfig[] ) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_key_parameters: cdktf.listMapper(cdktf.stringToTerraform)(this._cacheKeyParameters),
      cache_namespace: cdktf.stringToTerraform(this._cacheNamespace),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      content_handling: cdktf.stringToTerraform(this._contentHandling),
      credentials: cdktf.stringToTerraform(this._credentials),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      integration_http_method: cdktf.stringToTerraform(this._integrationHttpMethod),
      passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
      request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
      request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
      type: cdktf.stringToTerraform(this._type),
      uri: cdktf.stringToTerraform(this._uri),
      tls_config: cdktf.listMapper(apiGatewayIntegrationTlsConfigToTerraform)(this._tlsConfig),
    };
  }
}
