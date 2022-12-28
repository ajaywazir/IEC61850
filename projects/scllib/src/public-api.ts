// SPDX-FileCopyrightText: 2022 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

/*
 * Public API Surface of scl-lib
 */
// export * from './lib/scllib.service';
export * from './lib/xmlns/SCL';
// REST (Nest JS)
// export * from './lib/scllib.serviceRest';
import { ScllibServiceRest } from './lib/scllib.serviceRest';
export * from './lib/mappings/$Rest';
