'use client';

import { motion } from 'framer-motion';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/data/contact-info';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import services from '@/data/services';
import { useSearchParams } from 'next/navigation';

type InputFields = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
	service?: string;
};

type Props = {};

const ContactPage = (props: Props) => {
	const { register, handleSubmit, reset } = useForm<InputFields>();
	const [selectedService, setSelectedService] = useState<
		string | undefined
	>();
	const params = useSearchParams();
	const serviceNum = params.get('service');
	const serviceSelector = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (serviceNum) {
			const service = services.find(
				(service) => service.num === serviceNum
			);
			if (service) setSelectedService(service.title);
			serviceSelector.current?.focus();
		}
	}, [serviceNum]);

	const onSubmit: SubmitHandler<InputFields> = (data) => {
		if (selectedService) data.service = selectedService;
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				data,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
			)
			.then(
				(result) => {
					console.log('Email sent successfully', result.text);
					reset();
					setSelectedService(undefined);
				},
				(error) => {
					console.log('Email failed to send', error.text);
				}
			);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: 'easeIn',
				},
			}}
			className='py-6'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row gap-7'>
					<div className='xl:w-[54%] order-1 xl:order-none'>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col gap-6 p-10 bg-primary-light rounded-xl'>
							<h3 className='text-4xl text-accent'>
								Let&apos;s work together
							</h3>
							<p className='text-white/60'>
								Have a project in mind or just want to say hi?
								Feel free to drop me a message.
							</p>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
								<Input
									type='text'
									placeholder='First Name'
									{...register('firstName', {
										required: true,
									})}
								/>
								<Input
									type='text'
									placeholder='Last Name'
									{...register('lastName', {
										required: true,
									})}
								/>
								<Input
									type='email'
									placeholder='Email address'
									{...register('email', { required: true })}
								/>
								<Input
									type='tel'
									placeholder='Phone number'
									{...register('phone', { required: true })}
								/>
							</div>

							<Select
								onValueChange={(value) => {
									if (value) setSelectedService(value);
								}}
								value={selectedService}>
								<SelectTrigger
									ref={serviceSelector}
									className='w-full'>
									<SelectValue placeholder='Select a service' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											Select a service
										</SelectLabel>
										{services.map((service) => (
											<SelectItem
												key={service.num}
												value={service.title}>
												{service.title}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>

							<Textarea
								{...register('message', { required: true })}
								placeholder='Type your message here.'
								className='h-[200px]'
							/>
							<Button
								size='md'
								className='max-w-40'
								type='submit'>
								Send Message
							</Button>
						</form>
					</div>

					{/* info */}
					<div className='flex-1 flex items-center xl:justify-end order-2 xl:order-none mb-8 xl:mb-0'>
						<ul className='flex flex-col gap-10'>
							{contactInfo.map((info, index) => (
								<li
									className='flex items-center gap-6'
									key={info.title}>
									<div className='size-[52px] xl:size-[72px] bg-primary-light text-accent rounded-md flex items-center justify-center'>
										<info.icon className='text-[28px]' />
									</div>
									<div className='flex-1'>
										<p className='text-white/60'>
											{info.title}
										</p>
										<h3 className='text-xl'>
											{info.value}
										</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default ContactPage;
