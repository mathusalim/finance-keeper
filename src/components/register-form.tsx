import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthorization } from '@/data/supabase/useAuthorization';

type RegisterInputs = {
  email: string;
  userName?: string;
  password: string;
  repeatPassword: string;
};

export const RegisterForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  const { register, handleSubmit } = useForm<RegisterInputs>();
  const { signup } = useAuthorization();
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    const result = await signup({ email: data.email, password: data.password });
    console.log(result);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register('email', { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username (optional)</Label>
                <Input id="userName" type="text" {...register('userName')} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password', { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input
                  id="repeatPassword"
                  type="password"
                  {...register('repeatPassword', { required: true })}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <a href="/login" className="underline underline-offset-4">
                Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
