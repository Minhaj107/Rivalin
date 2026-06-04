import React from 'react';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Rivalin - Premium Luxury Jewelry | Handcrafted Excellence"
        description="Explore our exquisite collection of premium luxury jewelry. Each piece is handcrafted with precision and elegance."
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_APP_URL}`,
          title: 'Rivalin - Premium Luxury Jewelry',
          description: 'Explore our exquisite collection of premium luxury jewelry',
          type: 'website',
        }}
      />
      <main className="min-h-screen bg-white">
        <header className="bg-luxury-900 text-white py-16">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Rivalin</h1>
            <p className="text-xl text-luxury-200">Premium Luxury Jewelry Collection</p>
          </div>
        </header>

        <section className="container py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Welcome to Rivalin</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-luxury-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-luxury-gold">Premium Quality</h3>
              <p className="text-luxury-600">Handcrafted with the finest materials and attention to detail.</p>
            </div>
            <div className="bg-luxury-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-luxury-gold">Elegant Design</h3>
              <p className="text-luxury-600">Timeless pieces that complement your unique style.</p>
            </div>
            <div className="bg-luxury-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-luxury-gold">Fast Delivery</h3>
              <p className="text-luxury-600">Secure packaging and reliable shipping worldwide.</p>
            </div>
          </div>
        </section>

        <section className="bg-luxury-100 py-20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-8">Featured Collection</h2>
            <p className="text-xl text-luxury-600 mb-8">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
