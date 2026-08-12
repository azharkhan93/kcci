"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  Printer,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Calculator,
  Search,
} from "lucide-react";
import { useNavigation } from "@/app/context/NavigationContext";
import { ALL_TESTS_MASTER_LIST, SoilTest } from "@/app/constants/navigation";
import { Input } from "@/app/components/Input";
import { Select } from "@/app/components/Select";

const DISTRICT_OPTIONS = [
  "Srinagar",
  "Baramulla",
  "Anantnag",
  "Pulwama",
  "Budgam",
  "Kupwara",
  "Shopian",
  "Ganderbal",
  "Bandipora",
  "Kulgam",
  "Other Region",
];

export const TestBookingModal: React.FC = () => {
  const {
    bookingModalOpen,
    setBookingModalOpen,
    preselectedTestName,
    setActiveHref,
  } = useNavigation();

  // Wizard Steps: 1: Details, 2: Select Tests, 3: Sample Info, 4: Receipt
  const [step, setStep] = useState<number>(1);

  // Form State
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [district, setDistrict] = useState<string>("Srinagar");
  const [userCategory, setUserCategory] = useState<string>("Farmer / Orchardist");

  const [selectedTests, setSelectedTests] = useState<SoilTest[]>([]);
  const [sampleCount, setSampleCount] = useState<number>(1);
  const [dropoffDate, setDropoffDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const [testSearch, setTestSearch] = useState<string>("");
  const [bookingRef, setBookingRef] = useState<string>("");

  // Handle preselected test if opened from a specific test card
  useEffect(() => {
    if (bookingModalOpen) {
      if (preselectedTestName) {
        const found = ALL_TESTS_MASTER_LIST.find(
          (t) => t.name.toLowerCase() === preselectedTestName.toLowerCase()
        );
        if (found && !selectedTests.some((st) => st.name === found.name)) {
          setSelectedTests([found]);
        }
      } else if (selectedTests.length === 0) {
        setSelectedTests([ALL_TESTS_MASTER_LIST[0]]);
      }
    }
  }, [bookingModalOpen, preselectedTestName]);

  if (!bookingModalOpen) return null;

  const toggleTestSelection = (test: SoilTest) => {
    if (selectedTests.some((st) => st.name === test.name)) {
      setSelectedTests(selectedTests.filter((st) => st.name !== test.name));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  // Calculate live total price
  const pricePerSample = selectedTests.reduce(
    (sum, t) => sum + (t.priceNum || 250),
    0
  );
  const totalEstimatedPrice = pricePerSample * sampleCount;

  const handleNext = () => {
    if (step === 3) {
      // Generate unique reference code
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setBookingRef(`SKUAST-2026-B${randomCode}`);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setBookingModalOpen(false);
  };

  const filteredAvailableTests = ALL_TESTS_MASTER_LIST.filter(
    (t) =>
      t.name.toLowerCase().includes(testSearch.toLowerCase()) ||
      t.description.toLowerCase().includes(testSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-purple-100 relative overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#582c83] text-white p-5 sm:p-6 flex items-center justify-between flex-shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Online Sample Test Booking
              </h3>
            </div>
            <p className="text-purple-200 text-xs sm:text-sm mt-0.5">
              Division of Soil Science & Agricultural Chemistry, SKUAST-K
            </p>
          </div>

          <button
            onClick={handleReset}
            className="text-purple-200 hover:text-white transition-colors p-1.5 rounded-xl hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-purple-50 border-b border-purple-100 px-6 py-3 flex items-center justify-between text-xs font-semibold text-purple-900 flex-shrink-0">
          <div className={`flex items-center gap-2 ${step >= 1 ? "text-[#582c83]" : "opacity-40"}`}>
            <span className="w-5 h-5 rounded-full bg-[#582c83] text-white text-[10px] flex items-center justify-center font-bold">1</span>
            <span>Contact Details</span>
          </div>
          <ChevronRight className="w-4 h-4 text-purple-300" />
          <div className={`flex items-center gap-2 ${step >= 2 ? "text-[#582c83]" : "opacity-40"}`}>
            <span className="w-5 h-5 rounded-full bg-[#582c83] text-white text-[10px] flex items-center justify-center font-bold">2</span>
            <span>Select Tests</span>
          </div>
          <ChevronRight className="w-4 h-4 text-purple-300" />
          <div className={`flex items-center gap-2 ${step >= 3 ? "text-[#582c83]" : "opacity-40"}`}>
            <span className="w-5 h-5 rounded-full bg-[#582c83] text-white text-[10px] flex items-center justify-center font-bold">3</span>
            <span>Samples & Date</span>
          </div>
          <ChevronRight className="w-4 h-4 text-purple-300" />
          <div className={`flex items-center gap-2 ${step === 4 ? "text-[#582c83]" : "opacity-40"}`}>
            <span className="w-5 h-5 rounded-full bg-[#582c83] text-white text-[10px] flex items-center justify-center font-bold">4</span>
            <span>Receipt</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {/* STEP 1: Contact Details */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">
                Step 1: Producer / Researcher Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  icon={<User className="w-4 h-4 text-gray-400" />}
                  placeholder="e.g. Ghulam Nabi Rather"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <Input
                  label="Phone / Mobile Number *"
                  type="tel"
                  icon={<Phone className="w-4 h-4 text-gray-400" />}
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Input
                  label="Email Address"
                  type="email"
                  icon={<Mail className="w-4 h-4 text-gray-400" />}
                  placeholder="farmer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Select
                  label="District / Region"
                  icon={<MapPin className="w-4 h-4 text-gray-400" />}
                  options={DISTRICT_OPTIONS}
                  value={district}
                  onChange={(val) => setDistrict(val)}
                  searchable
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  User Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Farmer / Orchardist",
                    "Researcher / Faculty",
                    "Student",
                    "External Agency",
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setUserCategory(cat)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        userCategory === cat
                          ? "bg-[#582c83] text-white border-[#582c83]"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Select Tests */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 text-lg">
                  Step 2: Select Required Tests
                </h4>
                <span className="text-xs font-bold text-[#582c83] bg-purple-100 px-2.5 py-1 rounded-full">
                  {selectedTests.length} Selected
                </span>
              </div>

              {/* Search Test Filter */}
              <Input
                icon={<Search className="w-4 h-4 text-gray-400" />}
                placeholder="Filter available tests..."
                value={testSearch}
                onChange={(e) => setTestSearch(e.target.value)}
              />

              {/* Multi-select List */}
              <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredAvailableTests.map((t) => {
                  const isSelected = selectedTests.some(
                    (st) => st.name === t.name
                  );
                  return (
                    <div
                      key={t.name}
                      onClick={() => toggleTestSelection(t)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-purple-50/90 border-[#582c83] shadow-xs"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isSelected
                              ? "bg-[#582c83] border-[#582c83] text-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-xs">
                            {t.name}
                          </p>
                          <p className="text-gray-500 text-[11px] line-clamp-1">
                            {t.description}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-extrabold text-[#582c83] bg-purple-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {t.price || "₹250"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Samples & Date */}
          {step === 3 && (
            <div className="space-y-5">
              <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">
                Step 3: Sample Quantity & Schedule
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Number of Soil / Plant / Water Samples
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSampleCount(Math.max(1, sampleCount - 1))}
                      className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 font-bold text-lg flex items-center justify-center hover:bg-gray-200 cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={sampleCount}
                      onChange={(e) => setSampleCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center font-extrabold text-lg py-2 border border-gray-300 rounded-xl bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => setSampleCount(sampleCount + 1)}
                      className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 font-bold text-lg flex items-center justify-center hover:bg-gray-200 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <Input
                  label="Expected Dropoff / Dispatch Date"
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                />
              </div>

              {/* Price Calculation Summary Box */}
              <div className="bg-purple-50/80 border border-purple-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-[#582c83] font-bold text-sm">
                  <Calculator className="w-4 h-4" />
                  <span>Cost Estimation Breakdown</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-700 border-t border-purple-200/60 pt-2">
                  <div className="flex justify-between">
                    <span>Selected Tests ({selectedTests.length}):</span>
                    <span className="font-semibold">₹{pricePerSample} / sample</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Samples:</span>
                    <span className="font-semibold">{sampleCount} Sample(s)</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-[#582c83] pt-2 border-t border-purple-200">
                    <span>Total Estimated Testing Fee:</span>
                    <span>₹{totalEstimatedPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Booking Receipt */}
          {step === 4 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-900 text-base">
                    Sample Booking Slip Created Successfully!
                  </h4>
                  <p className="text-xs text-green-800">
                    Your test reservation has been generated for SKUAST-K Soil Testing Laboratory.
                  </p>
                </div>
              </div>

              {/* Receipt Card */}
              <div className="border border-purple-200 rounded-2xl p-5 bg-white space-y-4 shadow-sm relative">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Booking Reference Number
                    </span>
                    <p className="text-xl font-extrabold text-[#582c83]">
                      {bookingRef}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold">
                    Pending Dropoff
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
                  <div>
                    <span className="text-gray-400 font-medium">Producer Name:</span>
                    <p className="font-semibold text-gray-900">{fullName || "Ghulam Nabi Rather"}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">District:</span>
                    <p className="font-semibold text-gray-900">{district}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Total Samples:</span>
                    <p className="font-semibold text-gray-900">{sampleCount} Sample(s)</p>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Total Estimated Fee:</span>
                    <p className="font-bold text-[#582c83]">₹{totalEstimatedPrice}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <span className="text-xs font-bold text-gray-700 block mb-1">
                    Booked Tests ({selectedTests.length}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTests.map((t) => (
                      <span
                        key={t.name}
                        className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#582c83] border border-purple-200 text-xs font-semibold"
                      >
                        {t.name} ({t.price || "₹250"})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex items-center justify-between flex-shrink-0">
          {step > 1 && step < 4 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={handleNext}
              disabled={step === 2 && selectedTests.length === 0}
              className="px-5 py-2.5 rounded-xl bg-[#582c83] hover:bg-[#432165] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              <span>{step === 3 ? "Generate Booking Receipt" : "Next Step"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-3 w-full justify-end">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" /> Print Slip
              </button>
              <button
                onClick={() => {
                  handleReset();
                  setActiveHref("/forms");
                }}
                className="px-5 py-2 rounded-xl bg-[#582c83] text-white text-xs font-bold hover:bg-[#432165] transition-colors cursor-pointer"
              >
                Download Form PDF & Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
