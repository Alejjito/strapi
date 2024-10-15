import type { Struct, Schema } from '@strapi/strapi';

export interface WeekWeekComponent extends Struct.ComponentSchema {
  collectionName: 'components_week_week_components';
  info: {
    displayName: 'week-component';
    description: '';
  };
  attributes: {
    day: Schema.Attribute.Relation<'oneToOne', 'api::weekday.weekday'>;
    digit_min: Schema.Attribute.Integer;
    digit_max: Schema.Attribute.Integer;
    apply: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface UserVehiclePlate extends Struct.ComponentSchema {
  collectionName: 'components_user_vehicle_plates';
  info: {
    displayName: 'vehicle_plate';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    digit_plate: Schema.Attribute.Integer;
    vehicle_types: Schema.Attribute.Relation<
      'oneToMany',
      'api::vehicle-type.vehicle-type'
    >;
    imagen: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface TimeTimeSlot extends Struct.ComponentSchema {
  collectionName: 'components_time_time_slots';
  info: {
    displayName: 'time_slot';
    icon: 'clock';
  };
  attributes: {
    start: Schema.Attribute.Time;
    end: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'week.week-component': WeekWeekComponent;
      'user.vehicle-plate': UserVehiclePlate;
      'time.time-slot': TimeTimeSlot;
    }
  }
}
