import React from 'react'

import { AiOutlineCamera } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import profileImg from '../../assets/img/profile.png'

import { BackToPacks } from 'common/components/BackToPacksList/BackToPacksList'
import { Button } from 'common/components/Button/Button'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { logoutTC, setRegisterSuccess, updateUserName } from 'features/auth/authSlice'
import { ProfileAvatar, ProfileAvatarImg, ProfileUpload } from 'features/Profile/profile.styled'
import { PATH } from 'pages/path'

export const Profile = () => {
  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logoutTC())
    dispatch(setRegisterSuccess(false))
  }

  const setNewName = (newName: string) => {
    dispatch(updateUserName({ name: newName }))
  }

  const goToPackList = () => navigate(PATH.PACKS)

  return (
    <>
      <BackToPacks onClick={goToPackList} />
      <Box display={'flex'} justifyContent={'center'}>
        <div>
          <Box display={'flex'} justifyContent={'center'}>
            <h2>Personal Information</h2>
          </Box>

          <Box my={'4'}>
            <ProfileAvatar>
              <ProfileAvatarImg>
                <img src={profileImg} alt="" />
              </ProfileAvatarImg>
              <ProfileUpload>
                <AiOutlineCamera />
              </ProfileUpload>
            </ProfileAvatar>
          </Box>

          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'15px'}>
            <EditableSpan label={'Nickname'} value={user.name} onChange={setNewName} />
            <p>{user.email}</p>
          </Box>

          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'24px'}
            mt={'4'}
            alignItems={'center'}
          >
            <Button onClick={onLogout}>Log out</Button>
          </Box>
        </div>
      </Box>
    </>
  )
}
