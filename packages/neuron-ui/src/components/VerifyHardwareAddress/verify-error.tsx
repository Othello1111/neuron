import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'widgets/Button'
import { ReactComponent as FailedInfo } from 'widgets/Icons/FailedInfo.svg'
import { errorFormatter } from 'utils'
import CopyZone from 'widgets/CopyZone'

import styles from './verifyHardwareAddress.module.scss'

const VerifyError = ({ error, onCancel }: { error: string; onCancel: () => void }) => {
  const [t] = useTranslation()
  const errorMsg = errorFormatter(error, t)
  return (
    <div className={styles.container}>
      <section className={styles.action}>
        <span>
          <FailedInfo />
        </span>
        <div className={styles.message}>
          <CopyZone content={errorMsg}>{errorMsg}</CopyZone>
        </div>
      </section>
      <footer className={styles.footer}>
        <Button type="cancel" label={t('hardware-verify-address.actions.close')} onClick={onCancel} />
      </footer>
    </div>
  )
}

VerifyError.displayName = 'VerifyError'

export default VerifyError
