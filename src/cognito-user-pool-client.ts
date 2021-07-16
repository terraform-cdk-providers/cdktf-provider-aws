// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token_validity CognitoUserPoolClient#access_token_validity}
  */
  readonly accessTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
  */
  readonly allowedOauthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
  */
  readonly allowedOauthFlowsUserPoolClient?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
  */
  readonly allowedOauthScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#callback_urls CognitoUserPoolClient#callback_urls}
  */
  readonly callbackUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
  */
  readonly defaultRedirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
  */
  readonly enableTokenRevocation?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
  */
  readonly explicitAuthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#generate_secret CognitoUserPoolClient#generate_secret}
  */
  readonly generateSecret?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token_validity CognitoUserPoolClient#id_token_validity}
  */
  readonly idTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#logout_urls CognitoUserPoolClient#logout_urls}
  */
  readonly logoutUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#name CognitoUserPoolClient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
  */
  readonly preventUserExistenceErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#read_attributes CognitoUserPoolClient#read_attributes}
  */
  readonly readAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
  */
  readonly refreshTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
  */
  readonly supportedIdentityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_pool_id CognitoUserPoolClient#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#write_attributes CognitoUserPoolClient#write_attributes}
  */
  readonly writeAttributes?: string[];
  /**
  * analytics_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#analytics_configuration CognitoUserPoolClient#analytics_configuration}
  */
  readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[];
  /**
  * token_validity_units block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#token_validity_units CognitoUserPoolClient#token_validity_units}
  */
  readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits[];
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_arn CognitoUserPoolClient#application_arn}
  */
  readonly applicationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_id CognitoUserPoolClient#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#external_id CognitoUserPoolClient#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#role_arn CognitoUserPoolClient#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_data_shared CognitoUserPoolClient#user_data_shared}
  */
  readonly userDataShared?: boolean;
}

function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_arn: cdktf.stringToTerraform(struct!.applicationArn),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_data_shared: cdktf.booleanToTerraform(struct!.userDataShared),
  }
}

export interface CognitoUserPoolClientTokenValidityUnits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token CognitoUserPoolClient#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token CognitoUserPoolClient#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token CognitoUserPoolClient#refresh_token}
  */
  readonly refreshToken?: string;
}

function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    id_token: cdktf.stringToTerraform(struct!.idToken),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}
*/
export class CognitoUserPoolClient extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolClientConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_client',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessTokenValidity = config.accessTokenValidity;
    this._allowedOauthFlows = config.allowedOauthFlows;
    this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
    this._allowedOauthScopes = config.allowedOauthScopes;
    this._callbackUrls = config.callbackUrls;
    this._defaultRedirectUri = config.defaultRedirectUri;
    this._enableTokenRevocation = config.enableTokenRevocation;
    this._explicitAuthFlows = config.explicitAuthFlows;
    this._generateSecret = config.generateSecret;
    this._idTokenValidity = config.idTokenValidity;
    this._logoutUrls = config.logoutUrls;
    this._name = config.name;
    this._preventUserExistenceErrors = config.preventUserExistenceErrors;
    this._readAttributes = config.readAttributes;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._supportedIdentityProviders = config.supportedIdentityProviders;
    this._userPoolId = config.userPoolId;
    this._writeAttributes = config.writeAttributes;
    this._analyticsConfiguration = config.analyticsConfiguration;
    this._tokenValidityUnits = config.tokenValidityUnits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity - computed: false, optional: true, required: false
  private _accessTokenValidity?: number;
  public get accessTokenValidity() {
    return this.getNumberAttribute('access_token_validity');
  }
  public set accessTokenValidity(value: number ) {
    this._accessTokenValidity = value;
  }
  public resetAccessTokenValidity() {
    this._accessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidityInput() {
    return this._accessTokenValidity
  }

  // allowed_oauth_flows - computed: false, optional: true, required: false
  private _allowedOauthFlows?: string[];
  public get allowedOauthFlows() {
    return this.getListAttribute('allowed_oauth_flows');
  }
  public set allowedOauthFlows(value: string[] ) {
    this._allowedOauthFlows = value;
  }
  public resetAllowedOauthFlows() {
    this._allowedOauthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsInput() {
    return this._allowedOauthFlows
  }

  // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
  private _allowedOauthFlowsUserPoolClient?: boolean;
  public get allowedOauthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
  }
  public set allowedOauthFlowsUserPoolClient(value: boolean ) {
    this._allowedOauthFlowsUserPoolClient = value;
  }
  public resetAllowedOauthFlowsUserPoolClient() {
    this._allowedOauthFlowsUserPoolClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsUserPoolClientInput() {
    return this._allowedOauthFlowsUserPoolClient
  }

  // allowed_oauth_scopes - computed: false, optional: true, required: false
  private _allowedOauthScopes?: string[];
  public get allowedOauthScopes() {
    return this.getListAttribute('allowed_oauth_scopes');
  }
  public set allowedOauthScopes(value: string[] ) {
    this._allowedOauthScopes = value;
  }
  public resetAllowedOauthScopes() {
    this._allowedOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthScopesInput() {
    return this._allowedOauthScopes
  }

  // callback_urls - computed: false, optional: true, required: false
  private _callbackUrls?: string[];
  public get callbackUrls() {
    return this.getListAttribute('callback_urls');
  }
  public set callbackUrls(value: string[] ) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: false, optional: true, required: false
  private _defaultRedirectUri?: string;
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }
  public set defaultRedirectUri(value: string ) {
    this._defaultRedirectUri = value;
  }
  public resetDefaultRedirectUri() {
    this._defaultRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUriInput() {
    return this._defaultRedirectUri
  }

  // enable_token_revocation - computed: true, optional: true, required: false
  private _enableTokenRevocation?: boolean;
  public get enableTokenRevocation() {
    return this.getBooleanAttribute('enable_token_revocation');
  }
  public set enableTokenRevocation(value: boolean) {
    this._enableTokenRevocation = value;
  }
  public resetEnableTokenRevocation() {
    this._enableTokenRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTokenRevocationInput() {
    return this._enableTokenRevocation
  }

  // explicit_auth_flows - computed: false, optional: true, required: false
  private _explicitAuthFlows?: string[];
  public get explicitAuthFlows() {
    return this.getListAttribute('explicit_auth_flows');
  }
  public set explicitAuthFlows(value: string[] ) {
    this._explicitAuthFlows = value;
  }
  public resetExplicitAuthFlows() {
    this._explicitAuthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAuthFlowsInput() {
    return this._explicitAuthFlows
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret?: boolean;
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
  }
  public set generateSecret(value: boolean ) {
    this._generateSecret = value;
  }
  public resetGenerateSecret() {
    this._generateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validity - computed: false, optional: true, required: false
  private _idTokenValidity?: number;
  public get idTokenValidity() {
    return this.getNumberAttribute('id_token_validity');
  }
  public set idTokenValidity(value: number ) {
    this._idTokenValidity = value;
  }
  public resetIdTokenValidity() {
    this._idTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidityInput() {
    return this._idTokenValidity
  }

  // logout_urls - computed: false, optional: true, required: false
  private _logoutUrls?: string[];
  public get logoutUrls() {
    return this.getListAttribute('logout_urls');
  }
  public set logoutUrls(value: string[] ) {
    this._logoutUrls = value;
  }
  public resetLogoutUrls() {
    this._logoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlsInput() {
    return this._logoutUrls
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // prevent_user_existence_errors - computed: true, optional: true, required: false
  private _preventUserExistenceErrors?: string;
  public get preventUserExistenceErrors() {
    return this.getStringAttribute('prevent_user_existence_errors');
  }
  public set preventUserExistenceErrors(value: string) {
    this._preventUserExistenceErrors = value;
  }
  public resetPreventUserExistenceErrors() {
    this._preventUserExistenceErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUserExistenceErrorsInput() {
    return this._preventUserExistenceErrors
  }

  // read_attributes - computed: false, optional: true, required: false
  private _readAttributes?: string[];
  public get readAttributes() {
    return this.getListAttribute('read_attributes');
  }
  public set readAttributes(value: string[] ) {
    this._readAttributes = value;
  }
  public resetReadAttributes() {
    this._readAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAttributesInput() {
    return this._readAttributes
  }

  // refresh_token_validity - computed: false, optional: true, required: false
  private _refreshTokenValidity?: number;
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
  }
  public set refreshTokenValidity(value: number ) {
    this._refreshTokenValidity = value;
  }
  public resetRefreshTokenValidity() {
    this._refreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValidityInput() {
    return this._refreshTokenValidity
  }

  // supported_identity_providers - computed: false, optional: true, required: false
  private _supportedIdentityProviders?: string[];
  public get supportedIdentityProviders() {
    return this.getListAttribute('supported_identity_providers');
  }
  public set supportedIdentityProviders(value: string[] ) {
    this._supportedIdentityProviders = value;
  }
  public resetSupportedIdentityProviders() {
    this._supportedIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedIdentityProvidersInput() {
    return this._supportedIdentityProviders
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId
  }

  // write_attributes - computed: false, optional: true, required: false
  private _writeAttributes?: string[];
  public get writeAttributes() {
    return this.getListAttribute('write_attributes');
  }
  public set writeAttributes(value: string[] ) {
    this._writeAttributes = value;
  }
  public resetWriteAttributes() {
    this._writeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAttributesInput() {
    return this._writeAttributes
  }

  // analytics_configuration - computed: false, optional: true, required: false
  private _analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[];
  public get analyticsConfiguration() {
    return this.interpolationForAttribute('analytics_configuration') as any;
  }
  public set analyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration[] ) {
    this._analyticsConfiguration = value;
  }
  public resetAnalyticsConfiguration() {
    this._analyticsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsConfigurationInput() {
    return this._analyticsConfiguration
  }

  // token_validity_units - computed: false, optional: true, required: false
  private _tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits[];
  public get tokenValidityUnits() {
    return this.interpolationForAttribute('token_validity_units') as any;
  }
  public set tokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits[] ) {
    this._tokenValidityUnits = value;
  }
  public resetTokenValidityUnits() {
    this._tokenValidityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValidityUnitsInput() {
    return this._tokenValidityUnits
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
      allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
      allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
      allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
      default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
      enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
      explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
      generate_secret: cdktf.booleanToTerraform(this._generateSecret),
      id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
      logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
      name: cdktf.stringToTerraform(this._name),
      prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
      read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
      refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
      supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
      analytics_configuration: cdktf.listMapper(cognitoUserPoolClientAnalyticsConfigurationToTerraform)(this._analyticsConfiguration),
      token_validity_units: cdktf.listMapper(cognitoUserPoolClientTokenValidityUnitsToTerraform)(this._tokenValidityUnits),
    };
  }
}
