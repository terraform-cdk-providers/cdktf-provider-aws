// https://www.terraform.io/docs/providers/aws/d/availability_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAvailabilityZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}
  */
  readonly allAvailabilityZones?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#state DataAwsAvailabilityZone#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#zone_id DataAwsAvailabilityZone#zone_id}
  */
  readonly zoneId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#filter DataAwsAvailabilityZone#filter}
  */
  readonly filter?: DataAwsAvailabilityZoneFilter[];
}
export interface DataAwsAvailabilityZoneFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#values DataAwsAvailabilityZone#values}
  */
  readonly values: string[];
}

function dataAwsAvailabilityZoneFilterToTerraform(struct?: DataAwsAvailabilityZoneFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone}
*/
export class DataAwsAvailabilityZone extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAvailabilityZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsAvailabilityZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_availability_zone',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allAvailabilityZones = config.allAvailabilityZones;
    this._name = config.name;
    this._state = config.state;
    this._zoneId = config.zoneId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_availability_zones - computed: false, optional: true, required: false
  private _allAvailabilityZones?: boolean;
  public get allAvailabilityZones() {
    return this.getBooleanAttribute('all_availability_zones');
  }
  public set allAvailabilityZones(value: boolean ) {
    this._allAvailabilityZones = value;
  }
  public resetAllAvailabilityZones() {
    this._allAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allAvailabilityZonesInput() {
    return this._allAvailabilityZones
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_suffix - computed: true, optional: false, required: false
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }

  // network_border_group - computed: true, optional: false, required: false
  public get networkBorderGroup() {
    return this.getStringAttribute('network_border_group');
  }

  // opt_in_status - computed: true, optional: false, required: false
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }

  // parent_zone_id - computed: true, optional: false, required: false
  public get parentZoneId() {
    return this.getStringAttribute('parent_zone_id');
  }

  // parent_zone_name - computed: true, optional: false, required: false
  public get parentZoneName() {
    return this.getStringAttribute('parent_zone_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId
  }

  // zone_type - computed: true, optional: false, required: false
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAvailabilityZoneFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsAvailabilityZoneFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      filter: cdktf.listMapper(dataAwsAvailabilityZoneFilterToTerraform)(this._filter),
    };
  }
}
