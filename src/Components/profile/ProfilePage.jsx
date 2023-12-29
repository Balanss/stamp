import React, { useState } from 'react';
import FreeTierUpload from './FreeTier'; // Import your FreeTierUpload component
import PremiumTierUpload from './BusinessTier'; // Import your PremiumTierUpload component

export default function ProfilePage() {
    const [tier, setTier] = useState('');

    return (
        <div className="flex bg-gray-800 gap-4 flex-col items-center justify-center min-h-screen ">
         
           <button 
                onClick={() => setTier('free')}
                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            >
                Free Tier
            </button>
            <button 
                onClick={() => setTier('premium')}
                className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded"
            >
                Premium Tier Upload
            </button>

            {tier === 'free' && <FreeTierUpload />}
            {tier === 'premium' && <PremiumTierUpload />}
          
        </div>
    );
}