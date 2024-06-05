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

type Props = {};

const ContactPage = (props: Props) => {
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
						<form className='flex flex-col gap-6 p-10 bg-primary-light rounded-xl'>
							<h3 className='text-4xl text-accent'>
								Let's work together
							</h3>
							<p className='text-white/60'>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Voluptatum repudiandae non,
								assumenda inventore accusantium adipisci,
								expedita placeat quidem reprehenderit possimus
								totam voluptas fugiat. Id eius iste non quisquam
								voluptatem cupiditate.
							</p>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
								<Input type='text' placeholder='First Name' />
								<Input type='text' placeholder='Last Name' />
								<Input
									type='email'
									placeholder='Email address'
								/>
								<Input type='text' placeholder='Phone number' />
							</div>

							<Select>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select a service' />
								</SelectTrigger>
								<SelectContent>
									{/* TODO: CHANGE SERVICES */}
									<SelectGroup>
										<SelectLabel>
											Select a service
										</SelectLabel>
										<SelectItem value='Web Design'>
											Web Design
										</SelectItem>
										<SelectItem value='Web Development'>
											Web Development
										</SelectItem>
										<SelectItem value='SEO'>SEO</SelectItem>
										<SelectItem value='Marketing'>
											Marketing
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							<Textarea
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
