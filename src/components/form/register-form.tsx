import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React from "react"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    const fd = new FormData(e.currentTarget)
    const payload = {
      firstName: (fd.get('firstName') || '').toString().trim(),
      lastName: (fd.get('lastName') || '').toString().trim(),
      username: (fd.get('username') || '').toString().trim(),
      password: (fd.get('password') || '').toString(),
      identityCard: (fd.get('identityCard') || '').toString().trim(),
      phoneNumber: (fd.get('phoneNumber') || '').toString().trim(),
    }

    // basic client-side sanity checks
    if (payload.firstName.length < 2 || payload.lastName.length < 2) {
      setError('Họ và tên phải có ít nhất 2 ký tự')
      return
    }
    if (payload.username.length < 3) {
      setError('Tên đăng nhập phải từ 3 ký tự trở lên')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.message || 'Đăng ký thất bại')
      } else {
        setSuccess('Đăng ký thành công. Vui lòng đăng nhập.')
        // optionally redirect to login after short delay
        setTimeout(() => {
          window.location.href = '/login'
        }, 1200)
      }
    } catch (err) {
      setError((err as Error).message || 'Mạng không khả dụng')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={cn('flex flex-col gap-6', className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Tạo tài khoản</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Vui lòng điền thông tin đăng ký theo yêu cầu
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="firstName">Họ</FieldLabel>
          <Input id="firstName" name="firstName" type="text" placeholder="Nguyễn" required minLength={2} />
        </Field>

        <Field>
          <FieldLabel htmlFor="lastName">Tên</FieldLabel>
          <Input id="lastName" name="lastName" type="text" placeholder="Văn" required minLength={2} />
        </Field>

        <Field>
          <FieldLabel htmlFor="username">Tên đăng nhập</FieldLabel>
          <Input id="username" name="username" type="text" placeholder="tendangnhap" required minLength={3} maxLength={20} />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Ít nhất 8 ký tự, chữ hoa, chữ thường và số"
            required
            minLength={8}
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}"
            title="Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="identityCard">CCCD (12 chữ số)</FieldLabel>
          <Input id="identityCard" name="identityCard" type="text" inputMode="numeric" placeholder="012345678901" required pattern="^\\d{12}$" />
        </Field>

        <Field>
          <FieldLabel htmlFor="phoneNumber">Số điện thoại</FieldLabel>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="0xxxxxxxxx hoặc +84xxxxxxxxx"
            required
            pattern="^(\\+84|0)(3[2-9]|5[689]|7[0-9]|8[1-5]|9[0-46-9])[0-9]{7}$"
          />
        </Field>

        <Field>
          <Button type="submit" disabled={loading}>{loading ? 'Đang xử lý...' : 'Đăng ký'}</Button>
        </Field>

        <FieldSeparator>Hoặc</FieldSeparator>

        <Field>
          <FieldDescription className="text-center">
            Đã có tài khoản?{' '}
            <a href="/login" className="underline underline-offset-4">
              Đăng nhập
            </a>
          </FieldDescription>
        </Field>

        {error && <div className="text-sm text-destructive">{error}</div>}
        {success && <div className="text-sm text-success">{success}</div>}
      </FieldGroup>
    </form>
  )
}
