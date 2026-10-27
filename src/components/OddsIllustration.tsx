export function OddsIllustration() {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">An illustration, not a forecast</p>
        <div className="mt-5 grid max-w-xs grid-cols-10 gap-1.5" aria-hidden="true">
          {Array.from({ length: 100 }, (_, index) => (
            <span key={index} className={`h-3 w-3 rounded-[2px] ${index === 0 ? "bg-teal" : "bg-navy/12"}`} />
          ))}
        </div>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
          One hundred marks. If a client picked one proposal at random, each applicant would have a 1 in 100 chance. Real clients do not pick at random.
        </p>
      </div>
      <div className="lg:col-span-7">
        <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
          Why Compete Alone When We Can Succeed Together?
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            Traditional freelancing often puts a professional in a stack of independent proposals. The picture of one chance in a hundred is only a way to see that crowding. It is not a prediction. Selection depends on qualifications, the client’s preferences, price, trust, timing, and who else is in the field.
          </p>
          <p>
            Two qualified people can do something a single stretched résumé should not. They can combine skills, write a proposal that matches the real scope, and agree before the work starts who will do each part and how the fee will be divided. A wider network can also watch more markets than one person can cover. Greater reach is not a guaranteed win, and collaboration does not multiply anyone’s odds by a fixed number.
          </p>
          <p className="font-serif text-2xl leading-snug text-navy">
            We don&apos;t rely on one individual to succeed. We create a network where every member&apos;s success can benefit the wider team.
          </p>
        </div>
      </div>
    </div>
  );
}
