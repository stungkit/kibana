/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { mount } from 'enzyme';
import { noop } from 'lodash/fp';
import * as React from 'react';
import { Body } from '.';
import { mockDataProviders } from '../data_providers/mock/mock_data_providers';
import { headers } from './column_headers/headers';
import { Sort } from './sort';

describe('ColumnHeaders', () => {
  describe('rendering', () => {
    const sort: Sort = {
      columnId: 'time',
      sortDirection: 'descending',
    };

    test('it renders the column headers', () => {
      const wrapper = mount(
        <Body
          columnHeaders={headers}
          dataProviders={mockDataProviders}
          sort={sort}
          onColumnSorted={noop}
          onDataProviderRemoved={noop}
          onFilterChange={noop}
          onRangeSelected={noop}
          width={1000}
        />
      );

      headers.forEach(h => {
        expect(wrapper.find('[data-test-subj="columnHeaders"]').text()).toContain(h.text);
      });
    });
  });
});
