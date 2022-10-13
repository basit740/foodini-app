import React, { useState } from 'react';
import styles from '../../styles/dietarypref.module.css';

import Alg from './Alg';
import CustomCbx from '../utils/CustomCbx';
import Tag from '../utils/Tag/Tag';

const dietPrefs = [
	{
		id: '1',
		title: 'Vegetarian (VG)',
		value: 'vegetarian',
	},
	{
		id: '2',
		title: 'Vegan (V)',
		value: 'vegan',
	},
	{
		id: '3',
		title: 'Pescatrian (P)',
		value: 'pescatrian',
	},
	{
		id: '4',
		title: 'None',
		value: 'none',
	},
];
const DietaryPref = () => {
	const [step, setStep] = useState(1);

	const nextStepHandler = (e) => {
		setStep(2);
	};
	return (
		<div className={`container`}>
			<div className={`${styles['dietarypf-content']}`}>
				<div className={`${styles['dietarypf-heading']}`}>
					<h2>Diatary Preferences</h2>
					{step === 1 && (
						<p>
							Tell us your ditary preferences so we can show you the restaurants
							that best match your needs! Foodini automatically filters your
							restaurant matches based off your dietary requirements
						</p>
					)}
				</div>

				<div className={`${styles['diatarypf-box']}`}>
					{step === 1 && (
						<>
							<div className={`${styles['item']}`}>
								<div className={`${styles['item-heading']}`}>
									<div className={`${styles['item-heading-content']}`}>
										<div className='d-flex ali-center gap-32'>
											<p className={`${styles['item-number']}`}>
												<span>1</span>
											</p>
											<h3>Select Dietary Preferences</h3>
										</div>
										<p class={`${styles.brief} w-264`}>
											Brief description of how the Diatary filters work
										</p>
									</div>

									<ul className={styles['item-heading-tags']}>
										{dietPrefs.map((dtp) => {
											return <Tag data={dtp} />;
										})}
									</ul>
								</div>

								<div className={`${styles['item-body']}`}>
									<div className={`${styles['first-row']} d-flex`}>
										<div className={`${styles['item-body-heading']}`}>
											<h4>Select FODMAP Preferences</h4>
											<p className='w-264'>
												Brief description of how the FODMAP filters work
											</p>
										</div>

										<div className={`${styles['fodmap-grid']}`}>
											<div className={`${styles['fodmap']} ${styles.real}`}>
												<div className={`${styles['check-icon-container']}`}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														stroke-width='1.5'
														stroke='currentColor'
														className={`${styles['check-icon']}`}
													>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M4.5 12.75l6 6 9-13.5'
															stroke-width='2'
														/>
													</svg>
												</div>
												<p>FODMAP Diet</p>
											</div>

											{/* The code with no real EFFECT */}
											<div className={`${styles.fodmap} ${styles['d-none']}`}>
												<div className={`${styles['check-icon-container']}`}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														stroke-width='1.5'
														stroke='currentColor'
														className={`${styles['check-icon']}`}
													>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M4.5 12.75l6 6 9-13.5'
															stroke-width='2'
														/>
													</svg>
												</div>
												<p>FODMAP Diet</p>
											</div>
											<div className={`${styles.fodmap} ${styles['d-none']}`}>
												<div className={`${styles['check-icon-container']}`}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														stroke-width='1.5'
														stroke='currentColor'
														className={`${styles['check-icon']}`}
													>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M4.5 12.75l6 6 9-13.5'
															stroke-width='2'
														/>
													</svg>
												</div>
												<p>FODMAP Diet</p>
											</div>
											<div className={`${styles.fodmap} ${styles['d-none']}`}>
												<div className={`${styles['check-icon-container']}`}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														stroke-width='1.5'
														stroke='currentColor'
														className={`${styles['check-icon']}`}
													>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M4.5 12.75l6 6 9-13.5'
															stroke-width='2'
														/>
													</svg>
												</div>
												<p>FODMAP Diet</p>
											</div>
										</div>
									</div>

									{/* second row */}
									<div className={`${styles['fodmap-second-row']} d-flex j-sb`}>
										<div className={`${styles.infotext} w-350`}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className={`${styles['info-icon']}`}
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
												/>
											</svg>
											<p>
												Select "<span>EXCLUDE</span>" for all the food group you
												want to excluded from your diet
											</p>
										</div>

										<div className={`${styles['fodmap-items-grid']}`}>
											<div className={`${styles['fodmap-items-one']}`}>
												<CustomCbx title='Fructose' id='1' />
												<CustomCbx title='Lactose' id='2' />
												<CustomCbx title='Mannitol' id='3' />
											</div>

											<div className={`${styles['fodmap-items-two']}`}>
												<CustomCbx title='Sorbitol' id='4' />
												<CustomCbx title='GOS' id='5' />
												<CustomCbx title='Fructan' id='6' />
											</div>

											{/* <div className={`${styles['fodmap-items-one']} d-none`}>
										<CustomCbx title='Fructose' id='1' />
										<CustomCbx title='Lactose' id='2' />
										<CustomCbx title='Mannitol' id='3' />
									</div>
									<div className={`${styles['fodmap-items-two']} d-none`}>
										<CustomCbx title='Sorbitol' id='4' />
										<CustomCbx title='GOS' id='5' />
										<CustomCbx title='Fructan' id='6' />
									</div> */}
										</div>
									</div>
								</div>
							</div>

							<Alg />
						</>
					)}
					{/* Area for Next button */}

					<div className={styles.next_button_container}>
						<button onClick={nextStepHandler}>
							<span>Next</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M8.25 4.5l7.5 7.5-7.5 7.5'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DietaryPref;
