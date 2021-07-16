// https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontMonitoringSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#distribution_id CloudfrontMonitoringSubscription#distribution_id}
  */
  readonly distributionId: string;
  /**
  * monitoring_subscription block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}
  */
  readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription[];
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}
  */
  readonly realtimeMetricsSubscriptionStatus: string;
}

function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    realtime_metrics_subscription_status: cdktf.stringToTerraform(struct!.realtimeMetricsSubscriptionStatus),
  }
}

export interface CloudfrontMonitoringSubscriptionMonitoringSubscription {
  /**
  * realtime_metrics_subscription_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}
  */
  readonly realtimeMetricsSubscriptionConfig: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig[];
}

function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    realtime_metrics_subscription_config: cdktf.listMapper(cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform)(struct!.realtimeMetricsSubscriptionConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription}
*/
export class CloudfrontMonitoringSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontMonitoringSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_monitoring_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._distributionId = config.distributionId;
    this._monitoringSubscription = config.monitoringSubscription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution_id - computed: false, optional: false, required: true
  private _distributionId: string;
  public get distributionId() {
    return this.getStringAttribute('distribution_id');
  }
  public set distributionId(value: string) {
    this._distributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionIdInput() {
    return this._distributionId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitoring_subscription - computed: false, optional: false, required: true
  private _monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription[];
  public get monitoringSubscription() {
    return this.interpolationForAttribute('monitoring_subscription') as any;
  }
  public set monitoringSubscription(value: CloudfrontMonitoringSubscriptionMonitoringSubscription[]) {
    this._monitoringSubscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringSubscriptionInput() {
    return this._monitoringSubscription
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribution_id: cdktf.stringToTerraform(this._distributionId),
      monitoring_subscription: cdktf.listMapper(cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform)(this._monitoringSubscription),
    };
  }
}
