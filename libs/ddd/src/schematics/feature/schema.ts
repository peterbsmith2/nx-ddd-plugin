/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface FeatureOptions {
  /**
   * Library name
   */
  name: string;
  /**
   * Domain name
   */
  domain: string;
  /**
   * Apply the "feature-" prefix?
   */
  prefix?: boolean;
  /**
   * Is this feature module lazy loaded?
   */
  lazy?: boolean;
  /**
   * Subpath within apps directory
   */
  appsDirectory?: string;
  /**
   * Subpath within libs directory
   */
  libsDirectory?: string;
  /**
   * app name
   */
  app?: string;
  /**
   * Optional entity to create for this feature
   */
  entity?: string;
  /**
   * A type to determine if and how to build the library.
   */
  type?: "internal" | "buildable" | "publishable";
  /**
   * Add ngrx for the domain (entity required)
   */
  ngrx?: boolean;
  [k: string]: any;
}
