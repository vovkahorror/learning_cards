import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type VariantsSnackbarType = 'info' | 'success' | 'error' | 'warning'

type AppThemeType = 'light' | 'dark'

type InitialStateType = {
  statusLoading: boolean
  infoSnackbar: {
    text: string | null
    variant?: VariantsSnackbarType
  }
  isInitialized: boolean
  appTheme: AppThemeType
  isModal: boolean
}

export type SetInfoType = {
  text: string | null
  variant?: VariantsSnackbarType
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    statusLoading: false,
    infoSnackbar: { text: null, variant: undefined },
    isInitialized: false,
    appTheme: 'light',
    isModal: false,
  } as InitialStateType,
  reducers: {
    setStatusLoading: (state, action: PayloadAction<boolean>) => {
      state.statusLoading = action.payload
    },
    setInfoSnackbar: (state, action: PayloadAction<SetInfoType>) => {
      state.infoSnackbar = action.payload
    },
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
    setAppTheme: (state, action: PayloadAction<AppThemeType>) => {
      state.appTheme = action.payload
    },
    setModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload
    },
  },
})

export const { setStatusLoading, setInfoSnackbar, setIsInitialized, setAppTheme, setModal } =
  appSlice.actions
export const appReducer = appSlice.reducer
