import * as React from "react"

import { Button } from "../../../Components/shadcn/ui/button"

import { Card, CardContent } from "../../../Components/shadcn/ui/card"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../../Components/shadcn/ui/carousel"

export default function DonorRequestsDetails() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">

			<div className="mb-4">
				<Button>Download Submited Information</Button>
			</div>

			<Carousel className="w-full max-w-xs">
				<CarouselContent>

					<CarouselItem>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									Details
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									Details
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									Details
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									Details
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									Details
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="mt-4">
				<Button>Accept Request</Button>
			</div>
			<div className="mt-4">
				<Button>Reject Request</Button>
			</div>
		</div>
	)
}
