import React from 'react'

import { Table } from 'rsuite'

import { useAppSelector } from 'common/hooks/useAppSelector'
import { PacksAction } from 'features/packs/PackList/PacksAction'
import { CardPacksType } from 'features/packs/packsAPI'

const { Column, HeaderCell, Cell } = Table

export const PackList = () => {
  const data = useAppSelector<CardPacksType[]>(state => state.packs.cardPacks)

  return (
    <div>
      <Table height={400} data={data}>
        <Column width={200} align="center" fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Cards</HeaderCell>
          <Cell dataKey="cardsCount" />
        </Column>

        <Column width={200}>
          <HeaderCell>Last Updated</HeaderCell>
          <Cell dataKey="updated" />
        </Column>

        <Column width={200}>
          <HeaderCell>Created by</HeaderCell>
          <Cell dataKey="user_name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>{rowData => <PacksAction user_id={rowData.user_id} pack_id={rowData._id} />}</Cell>
        </Column>
      </Table>
    </div>
  )
}
