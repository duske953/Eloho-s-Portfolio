import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFetcher } from '@remix-run/react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';

export const userDetailsSchema = object({
  name: string()
    .required('Please enter your name')
    .max(20, 'Name must be in the range of 20 characters'),
  email: string()
    .required('Please enter your email address')
    .email('Invalid email')
    .max(30, 'Email must be in the range of 20 characters'),
  message: string()
    .required('Please enter a message')
    .max(300, 'Message must be in the range of 50 characters'),
});

export default function ContactModal({
  setAnimateContactBtn,
}: {
  setAnimateContactBtn: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    register,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(userDetailsSchema),
  });
  const fetcher = useFetcher<{ status: number; response: string }>();
  const [contactModal, setContactModal] = useState(false);
  function renderContactModal(state: boolean) {
    if (fetcher.state === 'submitting') return;
    setAnimateContactBtn(state);
    setContactModal(state);
  }

  useEffect(() => {
    if (fetcher.data && fetcher.data.status === 200) {
      reset({ name: '', email: '', message: '' });
      setContactModal(false);
      toast('Your message has been received', {
        type: 'success',
        toastId: 'contact',
      });
      return;
    }
    if (fetcher.data && fetcher.data.status !== 200) {
      toast(fetcher.data.response, { type: 'error', toastId: 'contact' });
    }
  }, [fetcher.data, reset]);

  return (
    <Dialog onOpenChange={renderContactModal} open={contactModal}>
      <DialogTrigger asChild>
        <Button className="rounded-full" size="lg" variant="secondary">
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
        </DialogHeader>

        <fetcher.Form id="contact" method="post" action="/">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="Name">Name</Label>
              <Input type="text" {...register('name')} />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="Email">Email</Label>
              <Input type="email" {...register('email')} />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="Message">Message</Label>
              <Textarea {...register('message')} />
            </div>
          </div>
        </fetcher.Form>
        <DialogFooter>
          <Button
            type="submit"
            form="contact"
            variant="secondary"
            size="lg"
            disabled={
              !isValid ||
              fetcher.state === 'loading' ||
              fetcher.state === 'submitting'
            }
          >
            {fetcher.state === 'submitting' && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
