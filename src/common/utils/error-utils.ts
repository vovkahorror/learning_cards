import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { setInfoSnackbar } from 'app/appSlice'

export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch) => {
  if (axios.isAxiosError(e)) {
    const error: string = e.response?.data ? e.response.data.error : e.message

    dispatch(setInfoSnackbar({ message: error, variant: 'error' }))
  } else {
    dispatch(setInfoSnackbar({ message: e.message, variant: 'error' }))
  }
}
