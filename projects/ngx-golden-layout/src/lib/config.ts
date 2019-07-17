import { InjectionToken, Type } from '@angular/core';

export interface ComponentType {
  /**
   * Optional string indicating that this component type is handled by the plugin
   * specified in this field.
   */
  plugin?: string;
  /**
   * Name used to register compoent with GoldenLayout.
   * Must be unique over all component types
   */
  name: string;

  /**
   * Angular component type.
   * Pass the class of the component to instantiate here.
   */
  type: Type<any>;
}

export interface PluginDependencyType {
  /**
   * Fully qualified module name of the dependency
   */
  name: string;
  /**
   * Function that loads the dependency
   */
  loader: Promise<any>;
}

/**
 * Inject an array of ComponentType into this token to
 * register those by default with the ComponentRegistry
 */
export const GoldenLayoutComponents = new InjectionToken<ComponentType[]>('ComponentTypes');

/**
 * Inject dependency modules to be used with the PluginRegistry
 * This token can use multi: true
 */
export const GoldenLayoutPluginDependency = new InjectionToken<PluginDependencyType[]>('Dependencies');
