import React from 'react'

interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    // Determine gradient background based on score
    let gradientFrom = '';
    let iconPath = '';

    if (score > 69) {
        gradientFrom = 'from-green-100';
        iconPath = '/icons/ats-good.svg';
    } else if (score > 49) {
        gradientFrom = 'from-yellow-100';
        iconPath = '/icons/ats-warning.svg';
    } else {
        gradientFrom = 'from-red-100';
        iconPath = '/icons/ats-bad.svg';
    }

    const subtitle = score > 69
    ? 'Great Job!'
    : score > 49
        ? 'Good Start'
        : 'Needs Improvement';

    return (
        <div className={`bg-gradient-to-br ${gradientFrom} to-white rounded-2xl shadow-md w-full p-6 space-y-6`}>
            {/* Top Section */}
            <div className="flex items-center gap-4 mb-6">
                <img src={iconPath} alt="ATS Status" className="w-12 h-12" />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        ATS Score - {score}/100
                    </h2>
                </div>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {subtitle}
                </h3>
                <p className="text-gray-600 mb-4">
                    This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.                
                </p>

                {/* Suggestions List */}
                <div className="space-y-3 mt-4">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <img 
                                src={suggestion.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'} 
                                alt={suggestion.type === 'good' ? 'Check' : 'Warning'} 
                                className="w-5 h-5 mt-1 flex-shrink-0"
                            />
                            <p className={suggestion.type === "good" ? "text-green-700" : "text-amber-700"}>{suggestion.tip}</p>
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <p className="text-gray-800 italic font-medium mt-6 pt-4 border-t border-gray-200">
                    💡 Keep refining your resume to improve your chances of getting past ATS filters and into the hands of recruiters.
                </p>
            </div>
        </div>
    );
}

export default ATS
