import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SpecRow {
  label: string;
  value: string;
}

interface FeatureHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ApplicationItem {
  title: string;
  description?: string;
}

interface WhyChooseItem {
  title: string;
  detail: string;
}

interface ProductLineLayoutProps {
  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoPath: string;
  // Breadcrumb
  parentCategory: { label: string; href: string };
  // Hero
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string; // placeholder supported
  // Overview
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewImage?: string;
  overviewListTitle?: string;
  overviewList?: string[];
  // Feature Highlights
  featureHighlights?: FeatureHighlight[];
  // Detailed Sections
  detailedSections?: {
    title: string;
    content: React.ReactNode;
  }[];
  // Specifications Table
  specifications?: SpecRow[];
  specificationsTitle?: string;
  // Applications
  applications?: ApplicationItem[];
  applicationsTitle?: string;
  // Why Choose
  whyChoose?: WhyChooseItem[];
  whyChooseTitle?: string;
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  contactFormTitle: string;
  contactFormDescription: string;
  contactFormQueryType: string;
}

const ProductLineLayout = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  seoPath,
  parentCategory,
  heroTag,
  heroTitle,
  heroSubtitle,
  heroImage,
  overviewTitle,
  overviewParagraphs,
  overviewImage,
  overviewListTitle,
  overviewList,
  featureHighlights,
  detailedSections,
  specifications,
  specificationsTitle = "Key Specifications",
  applications,
  applicationsTitle = "Applications",
  whyChoose,
  whyChooseTitle = "Why Choose ROS Global",
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  contactFormTitle,
  contactFormDescription,
  contactFormQueryType,
}: ProductLineLayoutProps) => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: parentCategory.label, url: parentCategory.href },
    { name: heroTitle, url: seoPath },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        path={seoPath}
        pageType="product"
        breadcrumbs={breadcrumbs}
      />
      <SocialMediaSidebar />

      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-corporate-blue transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <Link to={parentCategory.href} className="hover:text-corporate-blue transition-colors">
              {parentCategory.label}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-foreground font-medium truncate">{heroTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat"
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
      >
        {heroImage && <div className="absolute inset-0 bg-black/60" />}
        {!heroImage && <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue via-corporate-blue/90 to-corporate-blue/80" />}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white bg-white/10 backdrop-blur-sm">
              {heroTag}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              {heroSubtitle}
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
              {ctaButtonText}
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-corporate-blue">
              {overviewTitle}
            </h2>
            {overviewImage && (
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img src={overviewImage} alt={overviewTitle} className="w-full h-auto object-contain" />
              </div>
            )}
            {overviewParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
                {p}
              </p>
            ))}
            {overviewListTitle && (
              <h3 className="text-xl font-semibold text-corporate-blue mb-4 mt-8">{overviewListTitle}</h3>
            )}
            {overviewList && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {overviewList.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-corporate-blue mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      {featureHighlights && featureHighlights.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featureHighlights.map((feature, index) => (
                <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-corporate-blue text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Sections */}
      {detailedSections && detailedSections.map((section, index) => (
        <section key={index} className={`py-16 lg:py-24 ${index % 2 === 0 ? '' : 'bg-secondary/30'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-corporate-blue">
                {section.title}
              </h2>
              {section.content}
            </div>
          </div>
        </section>
      ))}

      {/* Specifications */}
      {specifications && specifications.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-corporate-blue text-center">
                {specificationsTitle}
              </h2>
              <Card className="shadow-[var(--shadow-card)]">
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {specifications.map((spec, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center p-4 hover:bg-muted/50 transition-colors">
                        <span className="font-semibold text-corporate-blue sm:w-1/3 mb-1 sm:mb-0">{spec.label}</span>
                        <span className="text-muted-foreground sm:w-2/3">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {applications && applications.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-corporate-blue text-center">
                {applicationsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, i) => (
                  <div key={i} className="flex items-start p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-corporate-blue mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-corporate-blue">{app.title}</span>
                      {app.description && (
                        <p className="text-sm text-muted-foreground mt-1">{app.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose ROS Global */}
      {whyChoose && whyChoose.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-corporate-blue text-center">
                {whyChooseTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChoose.map((item, i) => (
                  <div key={i} className="flex items-start p-5 rounded-lg bg-card border border-border shadow-sm">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-corporate-blue mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                {ctaTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {ctaDescription}
              </p>
            </div>

            <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  {whyChooseTitle}
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  {whyChoose?.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p><strong className="text-corporate-blue">{item.title}:</strong> {item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to={parentCategory.href}>
                    <Button variant="outline" className="text-corporate-blue border-corporate-blue hover:bg-corporate-blue hover:text-white">
                      ← Back to {parentCategory.label}
                    </Button>
                  </Link>
                </div>
              </div>

              <ContactForm
                title={contactFormTitle}
                description={contactFormDescription}
                defaultQueryType={contactFormQueryType}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLineLayout;
