import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { recoveryPasswordTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

type FormData = {
  email: string
}

export const RecoveryPassword = () => {
  const dispatch = useAppDispatch()
  const isSetRecovery = useAppSelector<boolean>(state => state.auth.isSetRecovery)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const validate = {
    required: 'Required',
    pattern: {
      value:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      message: 'Not Valid Email',
    },
  }

  const onSubmit = (data: FormData) => {
    dispatch(recoveryPasswordTC(data.email.trim()))
    reset()
  }

  if (isSetRecovery) {
    return <Navigate to={PATH.CHECK_EMAIL} />
  }

  return (
    <ForgotPasswordWrapper>
      <ForgotTitle>Forgot your password?</ForgotTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ForgotInput {...register('email', validate)} placeholder={'Email'} />
        <p>{errors?.email?.message}</p>
        <ForgotDescription>
          Enter your email address and we will send you further instructions
        </ForgotDescription>
        <ForgotButton type={'submit'}>submit</ForgotButton>
        <QuestionText>Did you remember your password?</QuestionText>
        <StyledLink to={PATH.LOGIN}>Try logging in</StyledLink>
      </form>
    </ForgotPasswordWrapper>
  )
}

//style
const ForgotPasswordWrapper = styled.div`
  margin: 0 auto;
  max-width: 347px;
`

const ForgotTitle = styled.p`
  width: fit-content;
  font-size: 26px;
  color: black;
  font-weight: 700;
  margin: 0 auto 36px;
`

const ForgotInput = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 25px;
`

const ForgotDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 65px;
`

const ForgotButton = styled.button`
  width: 100%;
  height: 36px;
  margin-bottom: 31px;
`

const QuestionText = styled.p`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin: 0 auto 7px;
`

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin: 0 auto;
`